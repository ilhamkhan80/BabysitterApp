import {render} from '@testing-library/react-native'
import CustomButton from '../../src/components/CustomButton'
describe('Custom Button',()=>{
    it('should render the title correctly',()=>{
        const tittle='Test title'
        const {getByText}=render(<CustomButton tittle={tittle}/>)
        expect(getByText(tittle)).toBeTruthy()
    })
})