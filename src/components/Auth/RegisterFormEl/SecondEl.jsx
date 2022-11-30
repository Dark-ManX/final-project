import { Input } from "./Els.styled"

const SecondEl = ({provideChange}) => {

    return (
        <label>
            <Input type="text" name='name' placeholder='Name' onChange={provideChange}/>
            <Input type="text" name='city' placeholder='City' onChange={provideChange}/>
            <Input type="text" name='phone' placeholder='Phone' onChange={provideChange}/>
        </label>
    )
};

export default SecondEl;