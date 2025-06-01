import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputLabel from "@/components/InputLabel";
import { useRegister } from "./useRegister";

const Register = () => {
  const { handleSubmitForm, value, setValue, errors, handleBlur } = useRegister();

  return (
    <>
      <h3 className="text-[#6e6b7b] text-left w-full text-[24px] mt-2">Đăng ký tài khoản 🚀</h3>
      <p className="text-[#6e6b7b] mb-2 text-[14px] text-left w-full mt-2">Đẹp trai có gì sai</p>

      <form className="w-full mt-5" onSubmit={handleSubmitForm}>
        <InputLabel
          name="fullName"
          type="text"
          label="Họ tên:"
          required
          id="fullName"
          placeholder="Nguyễn Văn A"
          value={value.fullName}
          onChange={(e) => setValue((prev) => ({ ...prev, fullName: e.target.value }))}
          onBlur={handleBlur}
          errorText={errors.fullName}
        />
        <div className="my-3"></div>

        <InputLabel
          name="email"
          type="text"
          label="Email:"
          required
          id="email"
          placeholder="abc@xyz.com"
          value={value.email}
          onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}
          errorText={errors.email}
        />
        <div className="my-3"></div>

        <InputLabel
          name="phone"
          type="text"
          label="Số điện thoại:"
          id="phone"
          placeholder="0987654321"
          value={value.phone}
          onChange={(e) => setValue((prev) => ({ ...prev, phone: e.target.value }))}
          errorText={errors.phone}
        />
        <div className="my-3"></div>

        <InputLabel
          name="password"
          type="password"
          label="Mật khẩu:"
          required
          id="pw"
          placeholder="Mật khẩu"
          value={value.password}
          onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}
          errorText={errors.password}
        />
        <div className="my-3"></div>

        <InputLabel
          name="confirm"
          type="password"
          label="Nhập lại mật khẩu:"
          required
          id="confirm"
          placeholder="Xác nhận mật khẩu"
          value={value.confirm}
          onChange={(e) => setValue((prev) => ({ ...prev, confirm: e.target.value }))}
          errorText={errors.confirm}
        />

        <div className="w-full text-right block mt-3 mb-6">
          <Link to={`/forgot-password`}>
            <span className="text-primary text-[13px] hover:text-primary-hover">Quên mật khẩu?</span>
          </Link>
        </div>

        <Button type="submit" className="w-full">
          <span className="text-white">Đăng ký</span>
        </Button>
      </form>

      <span className="mt-5 text-[14px] text-[#6e6b7b]">
        Bạn đã có tài khoản?
        <Link to={`/login`} className="ml-2 text-primary hover:text-primary-hover">
          Đăng nhập
        </Link>
      </span>
    </>
  );
};

export default Register;
