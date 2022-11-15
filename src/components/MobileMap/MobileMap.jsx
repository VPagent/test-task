// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@react-google-maps/api");
const AddressBox_1 = __importDefault(require("../AddressBox/AddressBox"));
const theme_1 = require("./theme");
const PRIVATE_KEY = "AIzaSyDASi86Rpx-yYzi7Fnie3m2ajJ5dotZ_FM";
const MobileMap = ({ item }) => {
    const { location, name, address, phone, email } = item;
    const containerStyle = {
        width: '300px',
        height: '150px',
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
    };
    const defaultOptions = {
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        clickableIcons: false,
        keyboardShortcuts: false,
        scrollwheel: false,
        disabledDoubleClickZoom: true,
        fullScreenControl: false,
        disableDefaultUI: true,
        styles: theme_1.defaultTheme
    };
    const center = {
        lat: location.lat,
        lng: location.long
    };
    const { isLoaded } = (0, api_1.useJsApiLoader)({
        id: 'google-map-script',
        googleMapsApiKey: PRIVATE_KEY
    });
    return (<>
        
        <div className='rounded-md py-5 lg:fixed top-[10px] right-[90px]'>
            {isLoaded &&
            <>
                <div className='py-[30px] px-[50px] bg-[#4d6059] rounded-t-md w-[300px] h-[50%] text-[#F5F5F5]'>
                    <p className='text-[16px] font-bold'>Department name:<br /> {name}.</p>
                    <AddressBox_1.default address={address} inMap={true}/>
                    <p className='text-[#ffffff]/70'>{phone}</p>
                    <p className='text-[#ffffff]/70'>{email}</p>
                </div>
                <api_1.GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2} options={defaultOptions}>
                    <api_1.Marker position={center}/>
                </api_1.GoogleMap>
                </>}
        </div>
        </>);
};
exports.default = MobileMap;
