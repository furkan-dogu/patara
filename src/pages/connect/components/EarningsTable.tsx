"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useMemo, useState } from "react";
import { fullData } from "@/helpers/earningsData";

interface EarningsItem {
  id: number;
  image: { src: string };
  account: string;
  amountIn: string;
  amountOut: string;
  price: string;
  value: string;
  fee: string;
  time: string;
}

const filterDataByRange = (
  data: EarningsItem[],
  range: string
): EarningsItem[] => {
  const now = new Date();
  const daysMap: Record<string, number> = {
    "1D": 1,
    "1W": 7,
    "1M": 30,
    "1Y": 365,
  };
  const days = daysMap[range];

  const result = !days
    ? data
    : data.filter((item) => {
        const diff =
          (now.getTime() - new Date(item.time).getTime()) /
          (1000 * 60 * 60 * 24);
        return diff <= days;
      });

  return result.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );
};

const getPaginationRange = (
  current: number,
  total: number
): (number | "...")[] => {
  const pages: (number | "...")[] = [];

  const add = (val: number) => {
    if (!pages.includes(val) && val >= 1 && val <= total) pages.push(val);
  };

  add(1);
  if (current - 2 > 2) pages.push("...");
  else if (current - 2 === 2) add(2);

  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) add(i);
  }

  if (total - (current + 2) > 1) pages.push("...");
  else if (total - (current + 2) === 1) add(total - 1);

  add(total);
  return pages;
};

const EarningsTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [selectedRange, setSelectedRange] = useState<string>("ALL");

  const filteredData = useMemo(
    () => filterDataByRange(fullData, selectedRange),
    [selectedRange]
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleSelectChange = (value: string) => {
    const parsed = parseInt(value);
    setItemsPerPage(parsed);
    setCurrentPage(1);
  };

  return (
    <div className="text-white w-full">
      <div className="flex items-center justify-between">
        <p className="sm:text-2xl sm:leading-7 text-xl font-medium">Earnings</p>
        <div className="flex items-center gap-1 bg-[#181818] rounded-xl p-1">
          {["1D", "1W", "1M", "1Y", "ALL"].map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              className={`font-medium text-sm leading-[18px] w-8 rounded-lg cursor-pointer ${
                selectedRange === range
                  ? "bg-[#282828] text-white"
                  : "text-[#585858] bg-transparent"
              }`}
              onClick={() => {
                setSelectedRange(range);
                setCurrentPage(1);
              }}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-3xl border border-[#383838] bg-[#181818] px-3 mt-5">
        <Table className="min-w-[900px]">
          <TableHeader className="h-[72px]">
            <TableRow>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                ACCOUNT
              </TableHead>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                AMOUNT IN
              </TableHead>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                AMOUNT OUT
              </TableHead>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                PRICE
              </TableHead>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                VALUE
              </TableHead>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                EARNED FEE
              </TableHead>
              <TableHead className="text-[#808080] font-medium text-xs leading-4">
                TIME
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-10 text-[#808080]"
                >
                  No data found
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td colSpan={7} className="h-[6px]" />
                  </tr>
                  <TableRow className="bg-[#282828] rounded-2xl border-none [&>td:first-child]:rounded-l-2xl [&>td:last-child]:rounded-r-2xl font-medium text-sm">
                    <TableCell>
                      <div className="flex items-center gap-3 font-semibold">
                        <img
                          src={item.image.src}
                          alt="avatar"
                          className="size-10 object-cover rounded-full"
                        />
                        {item.account.slice(0, 7) +
                          "..." +
                          item.account.slice(-4)}
                      </div>
                    </TableCell>
                    <TableCell>
                      {item.amountIn}{" "}
                      <span className="text-[#808080]">SUI</span>
                    </TableCell>
                    <TableCell>
                      {item.amountOut}{" "}
                      <span className="text-[#808080]">USDC</span>
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell>{item.fee}</TableCell>
                    <TableCell>
                      {(() => {
                        const t = new Date(item.time);
                        const now = new Date();
                        const diff =
                          (now.getTime() - t.getTime()) / (1000 * 60 * 60 * 24);
                        return diff <= 1
                          ? "1 day ago"
                          : t.toLocaleDateString("tr-TR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            });
                      })()}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            )}
          </TableBody>
        </Table>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-5 mb-4 gap-4">
          <Select onValueChange={handleSelectChange} defaultValue="10">
            <SelectTrigger className="bg-[#1A1A1A] border border-[#383838] text-white font-medium text-sm leading-[18px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] text-white font-medium text-sm leading-[18px]">
              <SelectItem value="5">5 Transaction</SelectItem>
              <SelectItem value="10">10 Transaction</SelectItem>
              <SelectItem value="25">25 Transaction</SelectItem>
              <SelectItem value="50">50 Transaction</SelectItem>
            </SelectContent>
          </Select>

          {totalPages > 1 && (
            <>
              <div className="flex-1 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    {getPaginationRange(currentPage, totalPages).map(
                      (page, index) => (
                        <PaginationItem key={index}>
                          {page === "..." ? (
                            <div className="xs:size-10 size-8 border border-[#383838] text-white font-medium xs:text-sm xs:leading-[18px] text-xs flex items-center justify-center xs:rounded-xl rounded-lg cursor-default">
                              ...
                            </div>
                          ) : (
                            <PaginationLink
                              isActive={currentPage === page}
                              onClick={() => setCurrentPage(page as number)}
                              className={`xs:size-10 size-8 border border-[#383838] text-white font-medium xs:text-sm xs:leading-[18px] text-xs flex items-center justify-center xs:rounded-xl rounded-lg cursor-pointer ${
                                currentPage === page
                                  ? "bg-[#282828]"
                                  : "bg-transparent"
                              }`}
                            >
                              {page}
                            </PaginationLink>
                          )}
                        </PaginationItem>
                      )
                    )}
                  </PaginationContent>
                </Pagination>
              </div>

              <div className="flex gap-2">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        className={`xs:size-10 size-8 border border-[#383838] font-medium xs:text-sm xs:leading-[18px] text-xs flex items-center justify-center xs:rounded-xl rounded-lg  ${
                          currentPage === 1
                            ? "text-[#808080] hover:bg-[#181818] hover:text-[#808080]"
                            : "text-white cursor-pointer"
                        }`}
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        className={`xs:size-10 size-8 border border-[#383838] font-medium xs:text-sm xs:leading-[18px] text-xs flex items-center justify-center xs:rounded-xl rounded-lg ${
                          currentPage === totalPages
                            ? "text-[#808080] hover:bg-[#181818] hover:text-[#808080]"
                            : "text-white cursor-pointer"
                        }`}
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarningsTable;
