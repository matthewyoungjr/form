import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="mt-12" style={{ marginLeft: "39%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-accent px-8"
        >
          {isSubmitted ? "Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
