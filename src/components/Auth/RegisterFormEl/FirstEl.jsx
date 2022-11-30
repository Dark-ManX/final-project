import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Input, EyeSymbol, Label } from "./Els.styled";

const FirstEl = ({data, confirmData, handleData, handleConfirmData, provideChange}) => {

    return (
      <Label>
        <Input type="text" name='email' placeholder='Email' onChange={provideChange} />
        <Input type={data ? 'text' : 'password'} name='password' placeholder='Password' onChange={provideChange}/>
        <Input className='last' type={confirmData ? 'text' : 'password'} name='confirmedPassword' placeholder='Confirm password' onChange={provideChange} />
        
        <EyeSymbol
          onClick={() => handleData(!data)}>
          {data ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>

        <EyeSymbol className='confirm'
          onClick={() => handleConfirmData(!confirmData)}>
          {confirmData ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>
      </Label>
    )
}

export default FirstEl;