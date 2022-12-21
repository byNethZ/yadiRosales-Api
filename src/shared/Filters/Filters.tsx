import React, { useEffect, useRef, useState } from "react";
import {
  IFilterOptions,
  PropertyProps,
} from "../../interfaces/Propety.interface";
import requests from "../../request";
import "./Filters.css";

type TypeContentFilter =
  | "minPrice"
  | "maxPrice"
  | "type"
  | "beds"
  | "bath"
  | "status";

interface PropsContentFilter {
  typeContent: string | null | undefined;
  onCloseDropdown: (element: React.ChangeEvent<HTMLInputElement>) => void;
  filters: IFilterOptions,
  subtypeChecks: string[],
  statusChecks: string[],
}

interface DataColumns {
  city: string[];
  county: string[];
  elementary_school: string[];
  high_school: string[];
  middle_school: string[];
  state: string[];
  zipcode: string[];
  subtype: string[];
}

interface FilterProps {
  properties: PropertyProps[];
  onFilterData: (data: PropertyProps[]) => void;
  isReset: boolean
}
const Arrow = () => {
  return (
    <div className="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        data-darkreader-inline-fill=""
      >
        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
      </svg>
    </div>
  );
};

const ContentFilter = ({
  typeContent,
  onCloseDropdown,
  filters,
  statusChecks,
  subtypeChecks
}: PropsContentFilter) => {
  const [inputElement, setInputElement] =
    useState<React.ChangeEvent<HTMLInputElement>>();

  const [dataColumns, setDataColumns] = useState<DataColumns>();

  useEffect(() => {
    if (inputElement) setCloseDropdown(inputElement);
    //console.log(inputElement);
  }, [inputElement]);

  useEffect(() => {
    if (typeContent === "type") {
      fetchData().catch(console.error);
    }
  }, [typeContent]);

  const fetchData = async () => {
    const response = await fetch(`${requests.fetchDataColumns}`);
    const data = await response.json();
    //console.log(data)
    setDataColumns(data.data);
  };

  const setCloseDropdown = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(inputElement);
    //console.log(evt);
    onCloseDropdown(evt);
  };
  return (
    <div className="filter-fields">
      <h4>{typeContent}</h4>
      {typeContent === "price" && (
        <div className="price-container">
          <div className="min-price-container filter-content-container">
            <h5>Min Price</h5>
            <div className="value">
              <p>$</p>
              <input type="number" name="minPrice" value={filters.minPrice} onChange={(evt) => setInputElement(evt)} />
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="0m"
                value="0"
              />
              <label htmlFor="0m">$ 0K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="50000m"
                value="50000"
              />
              <label htmlFor="50000m">$ 50K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="75000m"
                value="75000"
              />
              <label htmlFor="75000m">$ 75K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="100000m"
                value="100000"
              />
              <label htmlFor="100000m">$ 100K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="150000m"
                value="150000"
              />
              <label htmlFor="150000m">$ 150K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="200000m"
                value="200000"
              />
              <label htmlFor="200000m">$ 200K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="250000m"
                value="250000"
              />
              <label htmlFor="250000m">$ 250K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="300000m"
                value="300000"
              />
              <label htmlFor="300000m">$ 300K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="350000m"
                value="350000"
              />
              <label htmlFor="350000m">$ 350K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="minPrice"
                id="400000m"
                value="400000"
              />
              <label htmlFor="400000m">$ 400K</label>
            </div>
          </div>
          <div className="max-price-container filter-content-container">
            <h5>Max Price</h5>
            <div className="value">
              <p>$</p>
              <input type="number" name="maxPrice" value={filters.maxPrice} onChange={(evt) => setInputElement(evt)} />
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="75000M"
                value="75000"
              />
              <label htmlFor="75000M">$ 75K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="100000M"
                value="100000"
              />
              <label htmlFor="100000M">$ 100K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="125000M"
                value="125000"
              />
              <label htmlFor="125000M">$ 125K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="150000M"
                value="150000"
              />
              <label htmlFor="150000M">$ 150K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="175000M"
                value="175000"
              />
              <label htmlFor="175000M">$ 175K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="200000M"
                value="200000"
              />
              <label htmlFor="200000M">$ 200K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="225000M"
                value="225000"
              />
              <label htmlFor="225000M">$ 225K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="250000M"
                value="250000"
              />
              <label htmlFor="250000M">$ 250K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="275000M"
                value="275000"
              />
              <label htmlFor="275000M">$ 275K</label>
            </div>
            <div className="filter-input">
              <input
                onChange={(evt) => setInputElement(evt)}
                type="radio"
                name="maxPrice"
                id="999999999M"
                value="999999999"
              />
              <label htmlFor="999999999M">Any Price</label>
            </div>
          </div> 
        </div>
      )}
      {typeContent === "type" && (
        <div>
          {dataColumns?.subtype.map((type, index) => (
            <div className="filter-input-checkbox" key={index}>
              <input
                onChange={(evt) => setInputElement(evt)}
                type="checkbox"
                name="subtype"
                value={type}
                id={type}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>
      )}
      {typeContent === "beds" && (
        <div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="beds"
              value="1"
              id="1beds"
            />
            <label htmlFor="1beds">1+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="beds"
              value="2"
              id="2beds"
            />
            <label htmlFor="2beds">2+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="beds"
              value="3"
              id="3beds"
            />
            <label htmlFor="3beds">3+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="beds"
              value="4"
              id="4beds"
            />
            <label htmlFor="4beds">4+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="beds"
              value="5"
              id="5beds"
            />
            <label htmlFor="5beds">5+</label>
          </div>
        </div>
      )}
      {typeContent === "baths" && (
        <div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="1"
              id="1baths"
            />
            <label htmlFor="1baths">1+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="1.5"
              id="1.5baths"
            />
            <label htmlFor="1.5baths">1.5+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="2"
              id="2baths"
            />
            <label htmlFor="2baths">2+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="2.5"
              id="2.5baths"
            />
            <label htmlFor="2.5baths">2.5+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="3"
              id="3baths"
            />
            <label htmlFor="3baths">3+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="3.5"
              id="3.5baths"
            />
            <label htmlFor="3.5baths">3.5+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="4"
              id="4baths"
            />
            <label htmlFor="4baths">4+</label>
          </div>
          <div className="filter-input">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="radio"
              name="baths"
              value="5"
              id="5baths"
            />
            <label htmlFor="5baths">5+</label>
          </div>
        </div>
      )}
      {typeContent === "status" && (
        <div>
          <div className="filter-input-checkbox">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="checkbox"
              name="status"
              value="Pending"
              id="Pending"
            />
            <label htmlFor="Pending">Pending</label>
          </div>
          <div className="filter-input-checkbox">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="checkbox"
              name="status"
              value="Contingent"
              id="Contingent"
            />
            <label htmlFor="Contingent">Contingent</label>
          </div>
          <div className="filter-input-checkbox">
            <input
              onChange={(evt) => setInputElement(evt)}
              type="checkbox"
              name="status"
              value="Active"
              id="Active"
            />
            <label htmlFor="Active">Active</label>
          </div>
        </div>
      )}
    </div>
  );
};

function Filters({ properties, onFilterData, isReset }: FilterProps) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [typeContent, setTypeContent] = useState<string | null>();
  const [isSetFilter, setIsSetFilter] = useState<boolean>(false);
  const [subtype, setSubtype] = useState<string[]>([]);
  const [statusProperties, setStatusProperties] = useState<string[]>([]);
  const [filters, setFilters] = useState<IFilterOptions>({
    minPrice: undefined,
    maxPrice: undefined,
    //subtype: [],
    beds: undefined,
    baths: undefined,
    minSqFt: undefined,
    maxSqFt: undefined,
    yearBuilt: undefined,
    acres: undefined,
  });

  const handleClick = (type: string) => {
    type === typeContent
      ? setOpenDropdown(!openDropdown)
      : setOpenDropdown(true);
    setTypeContent(type);
    //console.log(openDropdown);
  };

  useEffect(() => {
    //filter properties
    let dataFiltered: PropertyProps[];

    dataFiltered = properties
      .filter((property) => {
        if (filters.minPrice === undefined || filters.minPrice === null) {
          return true;
        }
        return parseInt(property.price!) >= parseInt(filters.minPrice!);
      })
      .filter((property) => {
        if (filters.maxPrice === undefined || filters.maxPrice === null) {
          return true;
        }
        return parseInt(property.price!) <= parseInt(filters.maxPrice!);
      })
      .filter((property) => {
        if (
          filters.beds === undefined ||
          filters.beds === null ||
          property.bedrooms === null
        ) {
          return true;
        }
        return property.bedrooms! >= parseInt(filters.beds!);
      })
      .filter((property) => {
        if (
          filters.baths === undefined ||
          filters.baths === null ||
          property.baths === null
        ) {
          return true;
        }
        return parseFloat(property.baths!) >= parseFloat(filters.baths!);
      })
      .filter((property) => {
        if (subtype.length === 0 || property.subtype === null) {
          return true;
        }
        return subtype.includes(property.subtype);
      })
      .filter((property) => {
        if (statusProperties.length === 0 || property.status === null) {
          return true;
        }
        return statusProperties.includes(property.status);
      });

    if (!isSetFilter) return onFilterData(properties);
    //console.log(dataFiltered);
    onFilterData(dataFiltered);
  }, [filters, properties]);

  useEffect(() => {
    if(isReset) {
      setFilters({
        minPrice: undefined,
        maxPrice: undefined,
        //subtype: [],
        beds: undefined,
        baths: undefined,
        minSqFt: undefined,
        maxSqFt: undefined,
        yearBuilt: undefined,
        acres: undefined,
      });
      
      setSubtype([]);
      
      setStatusProperties([]);
    }
  }, [isReset])
  

  const filterProperties = (el: React.ChangeEvent<HTMLInputElement>) => {
    setIsSetFilter(true);

    if (el.target.type === "checkbox") {
      el.target.checked && el.target.name === "subtype" ? setSubtype((subtype) => [...subtype, el.target.value]) : setSubtype((subtype) => subtype.filter((item) => item !== el.target.value));

      el.target.checked && el.target.name === "status" ? setStatusProperties((statusProperties) => [...statusProperties, el.target.value]) : setStatusProperties((statusProperties) => statusProperties.filter((item) => item !== el.target.value));


    }

    setFilters({ ...filters, [el.target.name]: el.target.value });
  };

  return (
    <div className="filters">
      <div className="filters-container">
        <div onClick={() => handleClick("price")} className="filter">
          <h3>Price</h3>
          <Arrow />
        </div>
        <div onClick={() => handleClick("type")} className="filter">
          <h3>Type</h3>
          <Arrow />
        </div>
        <div onClick={() => handleClick("beds")} className="filter">
          <h3>Beds</h3>
          <Arrow />
        </div>
        <div onClick={() => handleClick("baths")} className="filter">
          <h3>Baths</h3>
          <Arrow />
        </div>
        <div onClick={() => handleClick("status")} className="filter">
          <h3>More</h3>
          <Arrow />
        </div>
      </div>
      {openDropdown && (
        <ContentFilter
          onCloseDropdown={(el) => filterProperties(el)}
          typeContent={typeContent}
          filters={filters}
          subtypeChecks={subtype}
          statusChecks={statusProperties}
        />
      )}
    </div>
  );
}

export default Filters;

//setFilters({ ...filters, [el.target.name]: el.target.value })
