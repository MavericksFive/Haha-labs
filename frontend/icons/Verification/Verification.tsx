import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from "react-native";

export const Verification = () => {
    return (
        <View>
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <Path d="M28.2325 12.8525C27.7613 12.36 27.2738 11.8525 27.09 11.4062C26.92 10.9975 26.91 10.32 26.9 9.66375C26.8812 8.44375 26.8612 7.06125 25.9 6.1C24.9387 5.13875 23.5563 5.11875 22.3363 5.1C21.68 5.09 21.0025 5.08 20.5938 4.91C20.1488 4.72625 19.64 4.23875 19.1475 3.7675C18.285 2.93875 17.305 2 16 2C14.695 2 13.7162 2.93875 12.8525 3.7675C12.36 4.23875 11.8525 4.72625 11.4062 4.91C11 5.08 10.32 5.09 9.66375 5.1C8.44375 5.11875 7.06125 5.13875 6.1 6.1C5.13875 7.06125 5.125 8.44375 5.1 9.66375C5.09 10.32 5.08 10.9975 4.91 11.4062C4.72625 11.8512 4.23875 12.36 3.7675 12.8525C2.93875 13.715 2 14.695 2 16C2 17.305 2.93875 18.2837 3.7675 19.1475C4.23875 19.64 4.72625 20.1475 4.91 20.5938C5.08 21.0025 5.09 21.68 5.1 22.3363C5.11875 23.5563 5.13875 24.9387 6.1 25.9C7.06125 26.8612 8.44375 26.8812 9.66375 26.9C10.32 26.91 10.9975 26.92 11.4062 27.09C11.8512 27.2738 12.36 27.7613 12.8525 28.2325C13.715 29.0613 14.695 30 16 30C17.305 30 18.2837 29.0613 19.1475 28.2325C19.64 27.7613 20.1475 27.2738 20.5938 27.09C21.0025 26.92 21.68 26.91 22.3363 26.9C23.5563 26.8812 24.9387 26.8612 25.9 25.9C26.8612 24.9387 26.8812 23.5563 26.9 22.3363C26.91 21.68 26.92 21.0025 27.09 20.5938C27.2738 20.1488 27.7613 19.64 28.2325 19.1475C29.0613 18.285 30 17.305 30 16C30 14.695 29.0613 13.7162 28.2325 12.8525ZM26.7887 17.7638C26.19 18.3888 25.57 19.035 25.2412 19.8288C24.9262 20.5913 24.9125 21.4625 24.9 22.3062C24.8875 23.1812 24.8738 24.0975 24.485 24.485C24.0963 24.8725 23.1862 24.8875 22.3062 24.9C21.4625 24.9125 20.5913 24.9262 19.8288 25.2412C19.035 25.57 18.3888 26.19 17.7638 26.7887C17.1388 27.3875 16.5 28 16 28C15.5 28 14.8562 27.385 14.2362 26.7887C13.6162 26.1925 12.965 25.57 12.1713 25.2412C11.4088 24.9262 10.5375 24.9125 9.69375 24.9C8.81875 24.8875 7.9025 24.8738 7.515 24.485C7.1275 24.0963 7.1125 23.1862 7.1 22.3062C7.0875 21.4625 7.07375 20.5913 6.75875 19.8288C6.43 19.035 5.81 18.3888 5.21125 17.7638C4.6125 17.1388 4 16.5 4 16C4 15.5 4.615 14.8562 5.21125 14.2362C5.8075 13.6162 6.43 12.965 6.75875 12.1713C7.07375 11.4088 7.0875 10.5375 7.1 9.69375C7.1125 8.81875 7.12625 7.9025 7.515 7.515C7.90375 7.1275 8.81375 7.1125 9.69375 7.1C10.5375 7.0875 11.4088 7.07375 12.1713 6.75875C12.965 6.43 13.6112 5.81 14.2362 5.21125C14.8612 4.6125 15.5 4 16 4C16.5 4 17.1438 4.615 17.7638 5.21125C18.3838 5.8075 19.035 6.43 19.8288 6.75875C20.5913 7.07375 21.4625 7.0875 22.3062 7.1C23.1812 7.1125 24.0975 7.12625 24.485 7.515C24.8725 7.90375 24.8875 8.81375 24.9 9.69375C24.9125 10.5375 24.9262 11.4088 25.2412 12.1713C25.57 12.965 26.19 13.6112 26.7887 14.2362C27.3875 14.8612 28 15.5 28 16C28 16.5 27.385 17.1438 26.7887 17.7638ZM21.7075 12.2925C21.8005 12.3854 21.8742 12.4957 21.9246 12.6171C21.9749 12.7385 22.0008 12.8686 22.0008 13C22.0008 13.1314 21.9749 13.2615 21.9246 13.3829C21.8742 13.5043 21.8005 13.6146 21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99944 17.2654 9.99944 17C9.99944 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1995 20.4957 12.1258 20.6171 12.0754C20.7385 12.0251 20.8686 11.9992 21 11.9992C21.1314 11.9992 21.2615 12.0251 21.3829 12.0754C21.5043 12.1258 21.6146 12.1995 21.7075 12.2925Z" fill="#14161B"/>
            </Svg>
        </View>
    );
}
