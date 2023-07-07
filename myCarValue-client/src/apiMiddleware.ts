import axios, { AxiosRequestConfig } from 'axios';

type User = {
    id: number;
    email: string;
};

type GetUsersResponse = {
    data: User[];
}

export async function getAllUsers() {
    try {
        const { data, status } = await axios.get<GetUsersResponse>(
            'http://localhost:3000/auth',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));

        console.log('response status is: ', status);

        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

// export const getAllUsers = async (headers?: object, params?: object): Promise<any> => {
//     const config: AxiosRequestConfig = {
//         headers: {
//             ...headers, // Add any additional headers here
//         },
//         params: {
//             ...params, // Add any additional parameters here
//         },
//     };

//     try {
//         const response = await axios.get('/auth', config);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error occurred while fetching all users.');
//     }
// };

