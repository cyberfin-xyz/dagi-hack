import { createContext, useContext } from 'react';
import MainStore from "./MainStore";

const IStoreContext = createContext({ MainStore });

export default function StoreContext () {
    return useContext(IStoreContext);
};