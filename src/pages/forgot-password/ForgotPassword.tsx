import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import InputLabel from "@/components/InputLabel";
import { Button } from "@/components/ui/button";
import { useForgotPassword } from "./useForgotPassword";
import RenderIf from "@/components/RenderIf";
import InputOTPLabel from "@/components/InputOTPLabel";

const ForgotPassword = () => {
  const { setValue, errors, isTabOTP, value, handleSubmit, setErrors, handleBlur } = useForgotPassword();

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-[#6e6b7b] text-left w-full text-[24px] mt-2">Quên mật khẩu? 🔒</h3>
      <p className="text-[#6e6b7b] mb-2 text-[14px] text-left w-full mt-2">
        Nhập email mà bạn đã đăng ký và sử dụng. Sau đó vui lòng nhập <span className="font-bold">mã OTP</span> gửi đến
        cho bạn.
      </p>

      <div className="w-full mt-5">
        <RenderIf value={isTabOTP}>
          <InputLabel
            type="text"
            id="email"
            name="email"
            label="Email:"
            required
            placeholder="abc@xyz.com"
            value={value.email}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            onFocus={() => setErrors((prev) => ({ ...prev, email: "" }))}
            errorText={errors["email"]}
          />

          <Button type="submit" className="w-full mt-5">
            <span className="text-white">Gửi mã OTP</span>
          </Button>
        </RenderIf>
        <RenderIf value={!isTabOTP}>
          <div className="w-full flex flex-col gap-3">
            <InputLabel
              type="text"
              id="email"
              name="email"
              label="Email:"
              required
              placeholder="abc@xyz.com"
              value={value.email}
              disabled
              className="!bg-[#efefef]"
              errorText={errors["email"]}
            />
            <InputOTPLabel
              label="Mã OTP:"
              required
              id="otp"
              errorText={errors["otp"]}
              value={value.otp}
              onChange={(newVal) =>
                setValue((prev) => ({
                  ...prev,
                  otp: newVal,
                }))
              }
              onBlur={handleBlur}
            />
            <InputLabel
              type="password"
              id="pw"
              name="pw"
              label="Mật khẩu:"
              required
              placeholder="Mật khẩu"
              value={value.password}
              onChange={(e) =>
                setValue((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              errorText={errors["password"]}
            />
            <InputLabel
              type="password"
              id="confirm"
              name="confirm"
              label="Xác nhận mật khẩu:"
              required
              placeholder="Xác nhận mật khẩu"
              value={value.confirm}
              onChange={(e) =>
                setValue((prev) => ({
                  ...prev,
                  confirm: e.target.value,
                }))
              }
              errorText={errors["confirm"]}
            />

            <Button type="submit" className="w-full mt-2">
              <span className="text-white">Đổi mật khẩu</span>
            </Button>
          </div>
        </RenderIf>
        <div className="flex items-center gap-1 text-center mt-5 mb-6">
          <Link to={`/login`} className="flex items-center">
            <ChevronLeft className="size-4 stroke-primary" />
            <span className="text-primary text-[15px] hover:text-primary-hover">Quay về trang đăng nhập</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
