import { useState } from "react";
import { MainPageLabel, InputInformation } from "./data";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  MainContainer,
  ContainerText,
  Form,
  Button,
  InputGroup,
} from "./styles";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [disable, setDisable] = useState(false);

  function handler(data) {
    setDisable(true);
  }

  return (
    <MainContainer>
      <ContainerText>
        <h1>{MainPageLabel.title}</h1>
        <h2>{MainPageLabel.subTitle.first}</h2>
        <h2>{MainPageLabel.subTitle.second}</h2>
      </ContainerText>
      <Form onSubmit={handleSubmit(handler)}>
        {InputInformation.map((input, index) => (
          <InputGroup key={index}>
            <input
              id={input.id}
              type={input.type}
              disabled={disable}
              placeholder={input.placeholder}
              {...register(`${input.htmlFor}`, { required: input.error })}
            ></input>
            <ErrorMessage
              errors={errors}
              name={input.htmlFor}
              render={({ message }) => <span>{message}</span>}
            />
          </InputGroup>
        ))}
        <Button disabled={disable}>
          {disable ? (
            <ThreeDots color="var(--white-color)" height={15} width={60} />
          ) : (
            "Entrar"
          )}
        </Button>
        <Link to={"/signup"}>
          <p>{MainPageLabel.switchPage}</p>
        </Link>
      </Form>
    </MainContainer>
  );
}

export default Login;
