import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from './searchItem/searchItem';
import SearchItem1 from './searchItem/searchItem1';
import SearchItem2 from './searchItem/searchItem2';
import SearchItem3 from './searchItem/searchItem3';
import SearchItem4 from './searchItem/searchItem4';
import SearchItem5 from './searchItem/searchItem5';
import SearchItem6 from './searchItem/searchItem6';
import SearchItem7 from './searchItem/searchItem7';
import SearchItem8 from './searchItem/searchItem8';
import SearchItem9 from './searchItem/searchItem9';

import './list.css';

const List = () => {
  const location = useLocation();
  
  // Kiểm tra xem location.state có tồn tại không và cung cấp giá trị mặc định
  const state = location.state || {};
  const defaultDestination = state.destination || '';
  const defaultDate = state.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }];
  const defaultOptions = state.options || { adult: 1, children: 0, room: 1 };

  const [destination, setDestination] = useState(defaultDestination);
  const [date, setDate] = useState(defaultDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                    onChange={(e) => setOptions((prev) => ({ ...prev, adult: e.target.value }))}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                    onChange={(e) => setOptions((prev) => ({ ...prev, children: e.target.value }))}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                    onChange={(e) => setOptions((prev) => ({ ...prev, room: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem1 />
            <SearchItem2 />
            <SearchItem3 />
            <SearchItem4 />
            <SearchItem5 />
            <SearchItem6 />
            <SearchItem7 />
            <SearchItem8 />
            <SearchItem9 />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
