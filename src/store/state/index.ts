export interface IStore {
    wallet: {
        account: string;
        isLoading: boolean;
    }
}

export const initialState: IStore = {
    wallet: {
        account: "",
        isLoading: false
    }
}
