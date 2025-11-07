import { useState } from "react";

export default function usePagination() {
    const [dataStructure, setDataStructure] = useState<{
        page: number;
        size: number;
        data: any[];
    }[]>([]);

    const paginate = (data: any[], sizePage: number) => {
        const resultArray = [];
        for (let i = 0; i < data?.length; i += sizePage) {
            resultArray.push({
                page: Math.floor(i / sizePage) + 1,
                size: sizePage,
                data: data.slice(i, i + sizePage),
            });
        }
        setDataStructure(resultArray);
        return resultArray;
    };

    return { paginate, dataStructure };
}