// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const md_1 = require("react-icons/md");
const md_2 = require("react-icons/md");
const react_responsive_1 = require("react-responsive");
const PaginationBox = ({ page, setPage }) => {
    const isDesktop = (0, react_responsive_1.useMediaQuery)({ query: '(min-width: 1200px)' });
    const handleClick = (e) => {
        const trigger = Number(e.target.textContent);
        if (e.target.textContent === "...") {
            return;
        }
        if (e.target.id === "-") {
            if (!isDesktop) {
                return;
            }
            if (page === 1) {
                return;
            }
            setPage(prev => prev - 1);
            return;
        }
        if (e.target.id === "+") {
            if (!isDesktop) {
                return;
            }
            if (page === 20) {
                return;
            }
            setPage(prev => prev + 1);
            return;
        }
        setPage(trigger);
    };
    return (<div className="paginationBox" onClick={handleClick}>
   
            <div id="-" className="px-[10px] lg:px-[23px] border-r"><md_1.MdOutlineArrowBackIos className="pointer-events-none" color={isDesktop ? '#70778B' : '#ffffff'}/></div>

            {page > 2 && <div className="pagBtn">1</div>}
            {page > 2 && <div className="pagBtn">{page >= 3 ? "..." : page - 2}</div>}
            {page >= 20 && <div className="pagBtn">{page - 7}</div>}
            {page >= 19 && <div className="pagBtn">{page - 6}</div>}
            {page >= 18 && <div className="pagBtn">{page - 5}</div>}
            {page >= 17 && <div className="pagBtn">{page - 4}</div>}
            {page >= 16 && <div className="pagBtn">{page - 3}</div>}
            {page > 14 && <div className="pagBtn">{page - 2}</div>}
            {page > 1 && <div className="pagBtn">{page - 1}</div>}
            <div className="pagBtn current">{page}</div>
            {page < 20 && <div className="pagBtn">{page + 1}</div>}
            {page < 19 && <div className="pagBtn">{page + 2}</div>}
            {page < 18 && <div className="pagBtn">{page + 3}</div>}
            {page < 17 && <div className="pagBtn">{page + 4}</div>}
            {page < 15 && <div className="pagBtn">{page >= 14 ? 19 : "..."}</div>}
            {page < 16 && <div className="pagBtn">{20}</div>}
    
            <div id="+" className=" px-[10px] lg:px-[23px] border-l"><md_2.MdOutlineArrowForwardIos className="pointer-events-none" color={isDesktop ? '#70778B' : '#ffffff'}/></div>
           
        </div>);
};
exports.default = PaginationBox;
