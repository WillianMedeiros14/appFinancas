import styled from 'styled-components/native';

export const Background = styled.View `
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView `
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image `
    margin-bottom: 15px;
`;

export const AreaInput = styled.View `
   width: 90%;
   align-items: center;
   padding-bottom: 17px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255, 0.20)',
    
}) `
    background: rgba(0,0,0,0.20);
    width: 100%;
    font-size: 17px;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-bottom-color: #b3acab;
    border-left-color: #b3acab;
`;

export const AreaSenha = styled.View `
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 7px;
    background: rgba(0,0,0,0.20);
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-bottom-color: #b3acab;
    border-left-color: #b3acab;
`;

export const InputSenha = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255, 0.20)'
}) `
    width: 85%;
    font-size: 17px;
    color: #fff;
    padding: 10px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const ButonMostrar = styled.TouchableOpacity `
   width: 15%;
   padding-top: 10px;
   padding-bottom: 10px;
   justify-content: center;
   align-items: center;
   border-top-right-radius: 7px;
   border-bottom-right-radius: 7px;
`;


export const SubmitButton = styled.TouchableOpacity `
   align-items:  center;
   justify-content: center;
   background-color: #00b94a;
   width: 90%;
   height: 45px;
   border-radius: 7px;
   margin-top: 10px;
`;

export const SubmitText = styled.Text `
   font-size: 20px;
   color: #131313;
`;

export const Link = styled.TouchableOpacity `
   margin-top: 5px;
   margin-bottom: 9px;
`;

export const LinkText = styled.Text `
   color: #fff;
`;

export const TextOu = styled.Text `
    color: #b3acab;
    margin-top: 20px;
`;