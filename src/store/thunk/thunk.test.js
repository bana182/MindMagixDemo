import axios from 'axios'
import MockAdaptor from 'axios-mock-adapter'
import { fetchEmployeeList } from './thunk'
describe('thunk', () => {
    const mock = new MockAdaptor(axios)
    mock.onGet('https://reqres.in/api/users?page=2').reply(200, {
        data: {
            data: [
                {
                    first_name: 'Manish',
                    last_name: 'dixit',
                    avatar: 'https://sdsdsdsd',
                    email: 'abc@gmail.com'
                }
            ]
        }
    });

    it('should return employee Data if calling fetchEmployeeList', async () => {
        const dispatch = jest.fn().mockImplementation();
        const callback = fetchEmployeeList();
        expect(typeof callback).toBe('function');
    })
})