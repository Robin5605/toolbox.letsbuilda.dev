import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export interface GenerateRandomNumberAPIResponse {
    numbers: number[],
    total: number,
}
export async function generateRandomNumber(
    lowerBound: number,
    upperBound: number,
    quantity: number,
) {
    const res = await axios.post<GenerateRandomNumberAPIResponse>(`/generators/random-numbers/`, {
        lower_bound: lowerBound,
        upper_bound: upperBound,
        quantity: quantity,
    });
    return res.data;
}
