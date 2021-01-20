import styled from 'styled-components';
import logoDark from '../../assets/logo_dark.png';
import logoLight from '../../assets/logo_light.png';

const LogoWithTheme = styled.img.attrs((props) => ({
  src: props.theme.title === 'dark' ? logoDark : logoLight,
}))``;

export default LogoWithTheme;
