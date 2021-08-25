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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBooks = void 0;
const data_1 = require("./data");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const mockFetchFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sleep(500);
    return data_1.books;
});
const useAsyncData_1 = __importDefault(require("./useAsyncData"));
const fetchBooks = () => {
    const { data: booksData, isLoading: booksListIsLoading, error: booksListHasError, loadData: loadBooks, } = useAsyncData_1.default({
        loadOnMount: true,
        fetchFn: mockFetchFunction,
        paramsOfFetch: {},
    });
    return {
        booksData,
        booksListIsLoading,
        booksListHasError,
        loadBooks,
    };
};
exports.fetchBooks = fetchBooks;
//# sourceMappingURL=getData.js.map