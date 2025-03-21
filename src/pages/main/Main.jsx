import Add from '@/components/Add';
import Toast from '@/components/common/toast/toast';
import List from '@/components/List';
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch';
import useToast from '@/hooks/useToast';
import { Container, Header, Title, Content } from '@/pages/main/Main.styles';

export default function MainPage() {
  const { message, type, show, showToast } = useToast({ autoClose: true, duration: 3000 });

  return (
    <Container>
      <Header>
        <Title>TODO LIST</Title>
        <ThemeToggleSwitch />
      </Header>

      <Content>
        <Add showToast={showToast} />
        <List />
      </Content>

      <Toast message={message} type={type} show={show} />
    </Container>
  );
}
