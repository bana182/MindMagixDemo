import React from 'react'
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Employees } from './EmployeeContainer'
import { EmployeeList } from '../components/employeeList/EmployeeList'

Enzyme.configure({ adapter: new Adapter() });
describe("Employee Container", () => {
    let wrapper
    beforeEach(() => {
        const props = {
            fetchEmployees: jest.fn(),
            employeeList: []
        }
        wrapper = shallow(<Employees {...props}/>)
    })
    
    it('should get the employeeList in props', () => {
        wrapper.setProps({
            employeeList: [
                {
                    first_name: 'Manish',
                    last_name: 'dixit',
                    avatar: 'https://sdsdsdsd',
                    email: 'abc@gmail.com'
                }
            ] 
        })

        expect(wrapper.find(EmployeeList)).toHaveLength(1)
    })

    it('should get the employeeList in props', () => {
        wrapper.setProps({
            employeeList: [
                {
                    first_name: 'Manish',
                    last_name: 'dixit',
                    avatar: 'https://sdsdsdsd',
                    email: 'abc@gmail.com'
                },
                {
                    first_name: 'Sarthak',
                    last_name: 'dixit',
                    avatar: 'https://sdsdsdsd',
                    email: 'abc@gmail.com'
                }
            ] 
        })

        expect(wrapper.find(EmployeeList)).toHaveLength(2)
    })
})