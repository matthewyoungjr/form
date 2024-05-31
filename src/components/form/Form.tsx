import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string({ required_error: "Name is required. 🧐" })
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email().min(6).max(25),
  password: z
    .string()
    .min(6, { message: "Password should have at least 6 characters." })
    .max(20),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {errors.name?.message && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
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
          {errors.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
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
          {errors.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-accent px-8">
          {isSubmitted ? "Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
