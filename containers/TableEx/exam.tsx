import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import {
  Search,
  ChevronsLeft,
  ChevronsRight,
  Calendar,
} from 'react-feather';
import { useQuery } from '@apollo/client';

import Table from 'containers/Statistic/Table';
import { STATISTIC } from 'helper/graphql/query/statistic';
import { context } from 'helper/graphql/apollo';
import Loading from 'components/Loading';
import { TableItem } from 'interfaces';

const StatisticPage = () => {
  const [filter, setFilter] = useState({
    orderNumber: '',
    productName: '',
    start: new Date('8/17/2020'),
    end: new Date('8/24/2020'),
  });
  const { data, loading, error } = useQuery(STATISTIC, {
    variables: {
      data: {
        orderNumber: filter.orderNumber,
        productName: filter.orderNumber,
        start: `${filter.start.getDate()}-${filter.start.getMonth() + 1}-${filter.start.getFullYear()}`,
        end: `${filter.end.getDate()}-${filter.end.getMonth() + 1}-${filter.end.getFullYear()}`,
      },
    },
    context,
  });
  const [items, setItems] = useState([] as TableItem[]);
  const [dataTable, setDataTable] = useState([] as TableItem[]);
  const [paging, setPaging] = useState({
    pages: 0,
    currentPage: 0,
  });
  const [pagesView, setPagesView] = useState([1]);

  useEffect(() => {
    if (!loading && !error) {
      setItems(data.orderStatistic.orderStatistic);
      setPaging({
        pages: Math.ceil(data.orderStatistic.orderStatistic.length / 10),
        currentPage: 1,
      });
      setDataTable(data.orderStatistic.orderStatistic.slice((paging.currentPage - 1) * 10, (paging.currentPage * 10) - 1));
    }
  }, [data]);

  useEffect(() => {
    const { currentPage, pages } = paging;
    setDataTable(items.slice((currentPage - 1) * 10, (currentPage * 10) - 1));

    const arr = [] as any;
    for (let i = currentPage - 5; i < currentPage + 6; i += 1) {
      if (i > 0 && i < pages + 1) {
        arr.push(i);
      }
    }
    setPagesView(arr);
  }, [paging]);

  const searchOrderNumber = (e: any) => {
    setFilter({ ...filter, orderNumber: e.target.value });
  };
  const searchName = (e: any) => {
    setFilter({ ...filter, productName: e.target.value });
  };

  const handlePage = (i: number) => {
    setPaging({
      ...paging,
      currentPage: i,
    });
  };

  const activePageStyle = (page: number) => {
    if (page === paging.currentPage) {
      return 'pagination__link--active';
    }
    return '';
  };

  return (
    <>
      <div className="grid grid-cols-12">
        {/* Search */}
        <div className="intro-y col-span-12 flex flex-wrap items-center xl:mb-3 mx-auto">
          <div className="w-full mt-3 flex">
            <div className="w-56 relative text-gray-700">
              <input onChange={searchOrderNumber} value={filter.orderNumber}
                type="text" placeholder="Mã Đơn Hàng..." autoFocus
                className="input w-full box pr-10 placeholder-theme-13" />
              <Search className='w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0'></Search>
            </div>
            <div className="w-56 relative text-gray-700 ml-2">
              <input onChange={searchName} value={filter.productName}
                type="text" placeholder="Tên Sản Phẩm..."
                className="input w-full box pr-10 placeholder-theme-13" />
              <Search className='w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0'></Search>
            </div>

            <div className='ml-10 rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600'>
              <Calendar className='w-4 h-4' />
            </div>
            <DatePicker
              className='input border ml-1 w-32'
              selected={filter.start}
              onChange={(date: any) => setFilter({ ...filter, start: date })}
              selectsStart
              startDate={filter.start}
              endDate={filter.end}
            />
            <DatePicker
              className='input border ml-1 w-32'
              selected={filter.end}
              onChange={(date: any) => setFilter({ ...filter, end: date })}
              selectsEnd
              startDate={filter.start}
              endDate={filter.end}
              minDate={filter.start}
            />
          </div>
        </div>

        <Table Data={dataTable} />
        {loading && (<div className='ml-56 mt-10'><Loading /></div>)}
        {error && <div className='text-red-600 ml-64 w-64'>something went wrong</div>}

        {/* Pagin */}
        {
          paging.pages !== 0 && (
            <div className="intro-y col-span-12 flex flex-wrap items-center mt-2 xl:mt-5">
              <ul className="pagination mx-auto">
                {
                  paging.currentPage !== 1 && (
                    <li>
                      <button onClick={() => handlePage(1)}
                        className="pagination__link cursor-pointer">
                        <ChevronsLeft className="w-4 h-4" />
                      </button>
                    </li>
                  )
                }
                {
                  pagesView.map((page) => (
                    <li key={page}>
                      <button onClick={() => handlePage(page)}
                        className={`pagination__link cursor-pointer ${activePageStyle(page)}`}>
                        {page}
                      </button>
                    </li>
                  ))
                }
                {
                  paging.currentPage !== paging.pages && (
                    <li>
                      <button onClick={() => handlePage(paging.pages)}
                        className="pagination__link cursor-pointer">
                        <ChevronsRight className="w-4 h-4" />
                      </button>
                    </li>
                  )
                }
              </ul>
            </div>
          )
        }
      </div>
    </>
  );
};

export default StatisticPage;
