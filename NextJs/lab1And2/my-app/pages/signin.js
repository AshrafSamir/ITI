import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const Signin = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading)
    return (
      <div className="text-center">
        <div class="spinner-border my-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign in</h3>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typeEmailX-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typePasswordX-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                  />
                </div>

                {/* <!-- Checkbox --> */}
                <div class="form-check d-flex justify-content-start mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label class="form-check-label" for="form1Example3">
                    Remember password
                  </label>
                </div>

                <button class="btn btn-info btn-lg btn-block" type="submit">
                  Login
                </button>

                <hr class="my-4" />

                <Link
                  class="btn btn-lg btn-block btn-dark col-8"
                  href=""
                  onClick={() => signIn("github")}
                >
                  <i class="fa-brands fa-github me-2"></i> Sign in with GitHub
                </Link>

                <Link
                  class="btn btn-lg btn-block btn-primary mt-3 col-8"
                  href=""
                  onClick={() => signIn("facebook")}
                >
                  <i class="fab fa-facebook me-2"></i>Sign in with facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
