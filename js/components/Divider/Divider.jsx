import React from 'react';
import ReactDOM from 'react-dom';
import scss from './Divider.scss';

class Divider extends React.Component {
    render() {
        return (
            <svg id={scss.divider} xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            	 viewBox="0 0 1930 255.5" >

            <polyline className={scss.divider} points="1224,171.8 1181.3,171.8 1139.2,129.6 1065,203.9 970.5,110.4 876,203.6 801.8,129.4 759.7,171.5
            	717,171.5 "/>
            <polyline className={scss.divider}  points="5,131.5 757.3,131.5 801.8,176.1 885.9,91.9 868.3,74.2 831.5,111 870.4,149.9 970.2,50.2 1070,149.9
            	1108.8,111 1072.1,74.2 1054.4,91.9 1138.5,176.1 1183.1,131.5 1925,131.5 "/>
            <rect className={scss.divider} x="921.9" y="26.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 231.426 707.2043)" width="95" height="95"/>
            <rect className={scss.divider} x="921.9" y="99.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 179.8072 728.5855)"  width="95" height="95"/>
            <rect className={scss.divider} x="940.3" y="178.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 137.3893 746.1556)"  width="58.2" height="58.2"/>
            </svg>
        )
    }
}
export default Divider;