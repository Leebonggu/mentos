import React from 'react'

// components
import Input from '@components/atom/Input'
import Message from '@components/atom/Message'
import Button from '@components/atom/Button'

// styles
import {
  Container,
  Title,
  InputWrapper,
  InputRow,
  Label,
  ButtonWrapper,
  InputWithMessage
} from './Form.styles'

function Form() {
  return (
    <Container>
      <Title>신청하기</Title>
      <InputWrapper>
        <InputRow>
          <Label>이름</Label>
          <InputWithMessage>
            <Input placeholder='이름을 입력하세요'/>
            <Message text='gg' isValid={false} visible={false}/>
          </InputWithMessage>
        </InputRow>
        <InputRow>
          <Label>연락처</Label>
          <InputWithMessage>
            <Input placeholder='010-1234-5678'/>
            <Message text='gg' isValid={false} visible={false}/>
          </InputWithMessage>
        </InputRow>
        <InputRow>
          <Label>이메일</Label>
          <InputWithMessage>
            <Input placeholder='abcde@email.com'/>
            <Message text='gg' isValid={false} visible={false}/>
          </InputWithMessage>
        </InputRow>
      </InputWrapper>
      <ButtonWrapper>
        <Button disabled={true}>다음</Button>
      </ButtonWrapper>
    </Container>
  )
}

export default Form