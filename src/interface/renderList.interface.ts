import { FlashListProps } from "@shopify/flash-list";
import React from "react";



export interface IRenderList<T> { 
    renderItem: React.ReactElement | null
    flashList: FlashListProps<T>
}