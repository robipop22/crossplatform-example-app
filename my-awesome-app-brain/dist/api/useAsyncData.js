"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useAsyncData = ({ loadOnMount = false, clearDataOnLoad = false, fetchFn, paramsOfFetch }) => {
    const [data, setData] = react_1.useState(null);
    const [error, setError] = react_1.useState(null);
    const [isLoading, setIsLoading] = react_1.useState(false);
    const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        setError(null);
        if (clearDataOnLoad === true) {
            setData(null);
        }
        try {
            const resp = yield fetchFn(paramsOfFetch);
            if (!resp.error) {
                setData(resp);
            }
            else {
                setError(resp.error);
            }
            setIsLoading(false);
        }
        catch (e) {
            setError(e);
            setIsLoading(false);
        }
    });
    react_1.useEffect(() => {
        if (loadOnMount) {
            loadData();
        }
    }, []);
    // Return the state and the load function to the component
    return { data, isLoading, error, loadData };
};
exports.default = useAsyncData;
//# sourceMappingURL=useAsyncData.js.map