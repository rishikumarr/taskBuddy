"use client";

import Icon from "@/Components/Icon";
import { AuthProvider, useAuth } from "@/context/AuthContext";

interface OrbitProps {
  className: string;
  borders: [string, string, string];
  backgrounds: [string, string, string];
}

const Orbits = (props: OrbitProps) => {
  const { className, borders, backgrounds } = props;

  return (
    <div
      className={`orbits absolute rounded-full z-[1] ${className}`}
      style={
        {
          "--bg": `linear-gradient(to bottom right, ${backgrounds[0]}, ${backgrounds[2]})`,
        } as React.CSSProperties
      }
    >
      <div
        className={`orbit w-full h-full rounded-full absolute ${borders[0]} border-2 border-dotted`}
      ></div>
      <div
        className={`orbit w-[80%] h-[80%] absolute rounded-full ${borders[1]} border-2 border-dotted`}
      ></div>
      <div
        className={`orbit w-[60%] h-[60%] rounded-full absolute ${borders[2]} border-2 border-dotted`}
      ></div>
    </div>
  );
};

const DummyContainer = () => {
  const PriNav = () => {
    return (
      <nav className="header flex items-center justify-between padding-cls px-5 py-3 sm:py-5 bg-gradient-to-b from-[#fad2ff] to-[#faeefc] md:from-white md:to-white border-b-2 border-[#fbdeff] md:border-b-0 relative">
        <div className="header-leading flex items-center gap-1">
          <Icon className="w-5 h-5 md:w-7 md:h-7 text-pink-900 md:text-slate-600">
            <svg
              className="w-full h-full"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66536 26.5837H19.332C21.9904 26.5837 24.1654 24.4087 24.1654 21.7503V8.45866C24.1654 6.04199 22.4737 4.10866 20.1779 3.74616C19.6945 2.90033 18.8487 2.41699 17.882 2.41699H11.1154C10.1487 2.41699 9.30287 2.90033 8.81953 3.74616C6.5237 4.10866 4.83203 6.04199 4.83203 8.45866V21.7503C4.83203 24.4087 7.00703 26.5837 9.66536 26.5837ZM10.8737 4.95449C10.8737 4.95449 10.9945 4.83366 11.1154 4.83366H18.0029L18.1237 4.95449V5.80033C18.1237 5.92116 18.0029 6.04199 17.882 6.04199H11.1154C10.9945 6.04199 10.8737 5.92116 10.8737 5.80033V4.95449ZM7.2487 8.45866C7.2487 7.49199 7.73203 6.76699 8.45703 6.28366V6.40449C8.45703 6.52533 8.57786 6.64616 8.57786 6.76699C8.57786 6.76699 8.57786 6.88783 8.6987 6.88783C8.6987 7.00866 8.81953 7.12949 8.81953 7.12949L8.94036 7.25033C8.94036 7.37116 9.0612 7.37116 9.18203 7.49199L9.30286 7.61283L9.54453 7.85449L9.66536 7.97533C9.7862 7.97533 9.7862 8.09616 9.90703 8.09616C9.90703 8.09616 10.0279 8.09616 10.0279 8.21699C10.1487 8.21699 10.2695 8.33783 10.3904 8.33783H10.5112C10.7529 8.45866 10.8737 8.45866 11.1154 8.45866H18.607C18.7279 8.45866 18.8487 8.45866 18.9695 8.33783C18.9695 8.33783 19.0904 8.33783 19.0904 8.21699C19.2112 8.21699 19.2112 8.09616 19.332 8.09616L19.4529 7.97533C19.5737 7.97533 19.5737 7.85449 19.6945 7.73366L19.8154 7.61283L20.057 7.37116L20.1779 7.25033C20.1779 7.12949 20.2987 7.12949 20.2987 7.00866C20.2987 7.00866 20.2987 6.88783 20.4195 6.88783C20.4195 6.76699 20.5404 6.64616 20.5404 6.52533V6.40449C21.2654 6.76699 21.7487 7.61282 21.7487 8.57949V21.8712C21.7487 23.2003 20.6612 24.2878 19.332 24.2878H9.66536C8.3362 24.2878 7.2487 23.2003 7.2487 21.8712V8.45866Z"
                fill="currentColor"
              />
              <path
                d="M10.8763 19.333H13.293C14.018 19.333 14.5013 18.8497 14.5013 18.1247C14.5013 17.3997 14.018 16.9163 13.293 16.9163H10.8763C10.1513 16.9163 9.66797 17.3997 9.66797 18.1247C9.66797 18.8497 10.1513 19.333 10.8763 19.333ZM10.8763 14.4997H18.1263C18.8513 14.4997 19.3346 14.0163 19.3346 13.2913C19.3346 12.5663 18.8513 12.083 18.1263 12.083H10.8763C10.1513 12.083 9.66797 12.5663 9.66797 13.2913C9.66797 14.0163 10.1513 14.4997 10.8763 14.4997Z"
                fill="currentColor"
              />
            </svg>
          </Icon>
          <h1 className="text-base sm:text-2xl font-semibold bg-gradient-to-b from-[#4e0e55] to-[#ac3fb7] md:from-[rgb(30,32,34)] md:to-[rgb(131,131,131)] text-transparent bg-clip-text">
            TaskBuddy
          </h1>
        </div>
        <div className="header-trailing flex items-center gap-2">
          <div className="profile-img w-9 h-9 p-0.5 rounded-full bg-gradient-to-br from-[#db89e2] to-[#7c1f85]">
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          <p className="text-base hidden sm:block">Aravind</p>
        </div>
      </nav>
    );
  };
  
  const SecNav = () => {
    return (
      <div className="secondary-nav hidden md:flex items-center justify-between">
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <button className="flex items-center gap-1 px-2 py-1 border-b-2 border-slate-400">
                <Icon className="w-4 h-4 text-slate-600 inline-block">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4106 5.59287H3.58887C3.3568 5.59287 3.13424 5.50068 2.97015 5.33659C2.80605 5.17249 2.71387 4.94993 2.71387 4.71787V3.58887C2.71387 3.3568 2.80605 3.13424 2.97015 2.97015C3.13424 2.80605 3.3568 2.71387 3.58887 2.71387H12.4106C12.6427 2.71387 12.8652 2.80605 13.0293 2.97015C13.1934 3.13424 13.2856 3.3568 13.2856 3.58887V4.71787C13.2853 4.94983 13.193 5.1722 13.029 5.33622C12.8649 5.50024 12.6426 5.59254 12.4106 5.59287ZM3.58887 3.46387C3.55572 3.46387 3.52392 3.47704 3.50048 3.50048C3.47704 3.52392 3.46387 3.55572 3.46387 3.58887V4.71787C3.46387 4.75102 3.47704 4.78281 3.50048 4.80626C3.52392 4.8297 3.55572 4.84287 3.58887 4.84287H12.4106C12.4438 4.84287 12.4756 4.8297 12.499 4.80626C12.5224 4.78281 12.5356 4.75102 12.5356 4.71787V3.58887C12.5356 3.55572 12.5224 3.52392 12.499 3.50048C12.4756 3.47704 12.4438 3.46387 12.4106 3.46387H3.58887ZM12.4106 13.2854H3.58887C3.3568 13.2854 3.13424 13.1932 2.97015 13.0291C2.80605 12.865 2.71387 12.6424 2.71387 12.4104V11.2814C2.71387 11.0493 2.80605 10.8267 2.97015 10.6626C3.13424 10.4986 3.3568 10.4064 3.58887 10.4064H12.4106C12.6426 10.4067 12.8649 10.499 13.029 10.663C13.193 10.827 13.2853 11.0494 13.2856 11.2814V12.4104C13.2856 12.6424 13.1934 12.865 13.0293 13.0291C12.8652 13.1932 12.6427 13.2854 12.4106 13.2854ZM3.58887 11.1564C3.55572 11.1564 3.52392 11.1695 3.50048 11.193C3.47704 11.2164 3.46387 11.2482 3.46387 11.2814V12.4104C3.46387 12.4435 3.47704 12.4753 3.50048 12.4988C3.52392 12.5222 3.55572 12.5354 3.58887 12.5354H12.4106C12.4438 12.5354 12.4756 12.5222 12.499 12.4988C12.5224 12.4753 12.5356 12.4435 12.5356 12.4104V11.2814C12.5356 11.2482 12.5224 11.2164 12.499 11.193C12.4756 11.1695 12.4438 11.1564 12.4106 11.1564H3.58887ZM12.4106 9.43912H3.58887C3.3568 9.43912 3.13424 9.34693 2.97015 9.18284C2.80605 9.01874 2.71387 8.79618 2.71387 8.56412V7.43512C2.71387 7.20305 2.80605 6.98049 2.97015 6.8164C3.13424 6.6523 3.3568 6.56012 3.58887 6.56012H12.4106C12.6426 6.56045 12.8649 6.65274 13.029 6.81676C13.193 6.98079 13.2853 7.20315 13.2856 7.43512V8.56412C13.2856 8.79618 13.1934 9.01874 13.0293 9.18284C12.8652 9.34693 12.6427 9.43912 12.4106 9.43912ZM3.58887 7.31012C3.55572 7.31012 3.52392 7.32329 3.50048 7.34673C3.47704 7.37017 3.46387 7.40197 3.46387 7.43512V8.56412C3.46387 8.59727 3.47704 8.62906 3.50048 8.65251C3.52392 8.67595 3.55572 8.68912 3.58887 8.68912H12.4106C12.4438 8.68912 12.4756 8.67595 12.499 8.65251C12.5224 8.62906 12.5356 8.59727 12.5356 8.56412V7.43512C12.5356 7.40197 12.5224 7.37017 12.499 7.34673C12.4756 7.32329 12.4438 7.31012 12.4106 7.31012H3.58887Z"
                      fill="currentColor"
                    />
                  </svg>
                </Icon>
                <span className="text-base">List</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 px-2 py-1">
                <Icon className="w-4 h-4 text-slate-600 inline-block">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6">
                      <path
                        d="M12.3636 2H3.63636C3.20237 2 2.78616 2.1724 2.47928 2.47928C2.1724 2.78616 2 3.20237 2 3.63636V12.3636C2 12.7976 2.1724 13.2138 2.47928 13.5207C2.78616 13.8276 3.20237 14 3.63636 14H12.3636C12.7976 14 13.2138 13.8276 13.5207 13.5207C13.8276 13.2138 14 12.7976 14 12.3636V3.63636C14 3.20237 13.8276 2.78616 13.5207 2.47928C13.2138 2.1724 12.7976 2 12.3636 2ZM12.9091 12.3636C12.9091 12.5083 12.8516 12.647 12.7493 12.7493C12.647 12.8516 12.5083 12.9091 12.3636 12.9091H3.63636C3.4917 12.9091 3.35296 12.8516 3.25067 12.7493C3.14838 12.647 3.09091 12.5083 3.09091 12.3636V3.63636C3.09091 3.4917 3.14838 3.35296 3.25067 3.25067C3.35296 3.14838 3.4917 3.09091 3.63636 3.09091H12.3636C12.5083 3.09091 12.647 3.14838 12.7493 3.25067C12.8516 3.35296 12.9091 3.4917 12.9091 3.63636V12.3636ZM11.2727 4.72727V8.54545C11.2727 8.69012 11.2153 8.82886 11.113 8.93115C11.0107 9.03344 10.8719 9.09091 10.7273 9.09091C10.5826 9.09091 10.4439 9.03344 10.3416 8.93115C10.2393 8.82886 10.1818 8.69012 10.1818 8.54545V4.72727C10.1818 4.58261 10.2393 4.44387 10.3416 4.34158C10.4439 4.23929 10.5826 4.18182 10.7273 4.18182C10.8719 4.18182 11.0107 4.23929 11.113 4.34158C11.2153 4.44387 11.2727 4.58261 11.2727 4.72727ZM8.54545 4.72727V11.2727C8.54545 11.4174 8.48799 11.5561 8.38569 11.6584C8.2834 11.7607 8.14466 11.8182 8 11.8182C7.85534 11.8182 7.7166 11.7607 7.61431 11.6584C7.51201 11.5561 7.45455 11.4174 7.45455 11.2727V4.72727C7.45455 4.58261 7.51201 4.44387 7.61431 4.34158C7.7166 4.23929 7.85534 4.18182 8 4.18182C8.14466 4.18182 8.2834 4.23929 8.38569 4.34158C8.48799 4.44387 8.54545 4.58261 8.54545 4.72727ZM5.81818 4.72727V6.90909C5.81818 7.05375 5.76071 7.19249 5.65842 7.29479C5.55613 7.39708 5.41739 7.45455 5.27273 7.45455C5.12806 7.45455 4.98933 7.39708 4.88703 7.29479C4.78474 7.19249 4.72727 7.05375 4.72727 6.90909V4.72727C4.72727 4.58261 4.78474 4.44387 4.88703 4.34158C4.98933 4.23929 5.12806 4.18182 5.27273 4.18182C5.41739 4.18182 5.55613 4.23929 5.65842 4.34158C5.76071 4.44387 5.81818 4.58261 5.81818 4.72727Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </Icon>
                <span className="text-base">Board</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 border-2 border-[#c895cd] px-4 py-2 bg-[#FFF9F9] rounded-lg cursor-pointer">
          <Icon className="w-4 h-4 text-slate-600">
            <svg
              className="w-full h-full"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.40055 8.20313H10.5467C10.935 8.20313 11.2498 7.88832 11.2498 7.50001C11.2498 7.1117 10.935 6.79689 10.5467 6.79689H2.40055L3.30964 5.8878C3.58423 5.61321 3.58423 5.16804 3.30964 4.89344C3.03509 4.61885 2.58987 4.61885 2.31528 4.89344L0.206014 7.00276C0.189561 7.01921 0.173999 7.03646 0.15928 7.05446C0.152858 7.06229 0.14728 7.07059 0.141233 7.0786C0.133499 7.08891 0.12553 7.09899 0.118359 7.10973C0.111796 7.11952 0.106124 7.1297 0.100124 7.13973C0.0943588 7.14938 0.0883119 7.15881 0.0830151 7.16874C0.0774839 7.17906 0.0728433 7.18965 0.0678746 7.20015C0.0629996 7.21041 0.0578903 7.22054 0.0535309 7.23104C0.0493122 7.2413 0.0458435 7.25176 0.0421404 7.26216C0.0380623 7.27341 0.0337498 7.28452 0.0302811 7.29601C0.0271405 7.30641 0.0248436 7.31696 0.0222186 7.32751C0.0192655 7.33918 0.0159843 7.3508 0.0136405 7.36271C0.0112499 7.37485 0.00979681 7.38713 0.00806245 7.39937C0.00656246 7.40982 0.00454685 7.42013 0.0035156 7.43072C0.00126562 7.45341 9.37494e-05 7.47624 4.68747e-05 7.49902C4.68747e-05 7.49935 0 7.49972 0 7.50005C0 7.50038 4.68747e-05 7.50076 4.68747e-05 7.50108C9.37494e-05 7.52391 0.00126562 7.54669 0.0035156 7.56943C0.00454685 7.57988 0.00651558 7.59005 0.0079687 7.60041C0.00974994 7.61279 0.0112031 7.62516 0.0136405 7.63744C0.0159843 7.64926 0.0192186 7.66069 0.0221717 7.67227C0.0248436 7.68291 0.0271873 7.69365 0.0303748 7.70419C0.0337967 7.71549 0.0380623 7.72641 0.0419997 7.73747C0.0457966 7.74807 0.0492653 7.75871 0.0535778 7.76911C0.0578434 7.77943 0.062859 7.78932 0.0676402 7.79939C0.0727027 7.81013 0.0774839 7.82096 0.0831088 7.8315C0.0882651 7.84111 0.0941244 7.85025 0.0997025 7.85958C0.105843 7.86994 0.111702 7.88039 0.118452 7.89047C0.125296 7.90074 0.132937 7.91035 0.140296 7.92024C0.146671 7.92872 0.152577 7.93749 0.159374 7.94574C0.17339 7.9628 0.188249 7.97916 0.203764 7.99486C0.204514 7.99561 0.205124 7.99646 0.205874 7.99721L2.31524 10.1066C2.45258 10.2439 2.63248 10.3126 2.81244 10.3126C2.99234 10.3125 3.17234 10.2439 3.30959 10.1067C3.58418 9.83207 3.58418 9.3869 3.30964 9.11231L2.40055 8.20313Z"
                fill="currentColor"
              />
              <path
                d="M14.2968 1.17188H5.39062C5.00231 1.17188 4.6875 1.48669 4.6875 1.875V4.68748C4.6875 5.07579 5.00231 5.3906 5.39062 5.3906C5.77893 5.3906 6.09374 5.07579 6.09374 4.68748V2.57812H13.5937V12.4219H6.09374V10.3124C6.09374 9.92413 5.77893 9.60932 5.39062 9.60932C5.00231 9.60932 4.6875 9.92413 4.6875 10.3124V13.125C4.6875 13.5133 5.00231 13.8281 5.39062 13.8281H14.2968C14.6851 13.8281 14.9999 13.5133 14.9999 13.125V1.875C14.9999 1.48669 14.6851 1.17188 14.2968 1.17188Z"
                fill="currentColor"
              />
            </svg>
          </Icon>
          <button className="text-xs">Logout</button>
        </div>
      </div>
    );
  };
  
  const TaskBar = () => {
    return (
      <div className="task-bar w-full grid grid-cols-1 md:grid-cols-2 gap-2 grid-flow-row md:grid-flow-col items-center ">
        <div className="task-bar-filter flex items-center gap-2 text-xs order-2 md:order-1">
          <div>
            <p>Filter by:</p>
          </div>
          <div className="border border-slate-300 relative rounded-full px-2 py-1 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-1">Category</span>
              <Icon className="w-4 h-4 text-slate-600">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.00019 11.6252C8.80819 11.6252 8.61619 11.5517 8.46994 11.4054L5.46994 8.40544C5.17669 8.11219 5.17669 7.63819 5.46994 7.34494C5.76319 7.05169 6.23719 7.05169 6.53044 7.34494L9.00919 9.82369L11.4789 7.43869C11.7782 7.15144 12.2514 7.15969 12.5394 7.45744C12.8274 7.75519 12.8192 8.23069 12.5214 8.51794L9.52144 11.4144C9.37519 11.5554 9.18769 11.6252 9.00019 11.6252Z"
                      fill="black"
                    />
                    <mask
                      id="mask0_68_1981"
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="7"
                      width="8"
                      height="5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.00019 11.6252C8.80819 11.6252 8.61619 11.5517 8.46994 11.4054L5.46994 8.40544C5.17669 8.11219 5.17669 7.63819 5.46994 7.34494C5.76319 7.05169 6.23719 7.05169 6.53044 7.34494L9.00919 9.82369L11.4789 7.43869C11.7782 7.15144 12.2514 7.15969 12.5394 7.45744C12.8274 7.75519 12.8192 8.23069 12.5214 8.51794L9.52144 11.4144C9.37519 11.5554 9.18769 11.6252 9.00019 11.6252Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_68_1981)">
                      <rect width="18" height="18" fill="currentColor" />
                    </g>
                  </g>
                </svg>
              </Icon>
            </div>
            <ul className="absolute hidden border bg-white shadow-lg min-w-24 z-10 rounded-lg top-[120%] left-0">
              <li className="px-2.5 py-1.5">Work</li>
              <li className="px-2.5 py-1.5">Personal</li>
            </ul>
          </div>
          <div className="border border-slate-300 relative rounded-full px-2 py-1 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-1">Due Date</span>
              <Icon className="w-4 h-4 text-slate-600">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.00019 11.6252C8.80819 11.6252 8.61619 11.5517 8.46994 11.4054L5.46994 8.40544C5.17669 8.11219 5.17669 7.63819 5.46994 7.34494C5.76319 7.05169 6.23719 7.05169 6.53044 7.34494L9.00919 9.82369L11.4789 7.43869C11.7782 7.15144 12.2514 7.15969 12.5394 7.45744C12.8274 7.75519 12.8192 8.23069 12.5214 8.51794L9.52144 11.4144C9.37519 11.5554 9.18769 11.6252 9.00019 11.6252Z"
                      fill="black"
                    />
                    <mask
                      id="mask0_68_1981"
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="7"
                      width="8"
                      height="5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.00019 11.6252C8.80819 11.6252 8.61619 11.5517 8.46994 11.4054L5.46994 8.40544C5.17669 8.11219 5.17669 7.63819 5.46994 7.34494C5.76319 7.05169 6.23719 7.05169 6.53044 7.34494L9.00919 9.82369L11.4789 7.43869C11.7782 7.15144 12.2514 7.15969 12.5394 7.45744C12.8274 7.75519 12.8192 8.23069 12.5214 8.51794L9.52144 11.4144C9.37519 11.5554 9.18769 11.6252 9.00019 11.6252Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_68_1981)">
                      <rect width="18" height="18" fill="currentColor" />
                    </g>
                  </g>
                </svg>
              </Icon>
            </div>
            <ul className="absolute hidden border bg-white shadow-lg min-w-24 z-10 rounded-lg top-[120%] left-0">
              <li className="px-2.5 py-1.5">Work</li>
              <li className="px-2.5 py-1.5">Personal</li>
            </ul>
          </div>
        </div>
        <div className="task-bar-search justify-self-center md:justify-self-end order-3 md:order-2 mt-4 md:mt-0 mr-0 md:mr-5">
          <div className="relative group">
            <input
              type="search"
              placeholder="Search"
              className="border border-slate-300 outline-none focus:border-slate-400 rounded-full pl-8 pr-3 py-1.5 text-xs focus:shadow-inner text-slate-700"
            />
            <Icon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
              <svg
                className="w-full h-full"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 8.25C3.75 5.76825 5.76825 3.75 8.25 3.75C10.7318 3.75 12.75 5.76825 12.75 8.25C12.75 10.7318 10.7318 12.75 8.25 12.75C5.76825 12.75 3.75 10.7318 3.75 8.25ZM15.5303 14.4697L12.984 11.9228C13.7738 10.9073 14.25 9.6345 14.25 8.25C14.25 4.94175 11.5582 2.25 8.25 2.25C4.94175 2.25 2.25 4.94175 2.25 8.25C2.25 11.5582 4.94175 14.25 8.25 14.25C9.6345 14.25 10.9073 13.7738 11.9228 12.984L14.4697 15.5303C14.616 15.6765 14.808 15.75 15 15.75C15.192 15.75 15.384 15.6765 15.5303 15.5303C15.8235 15.237 15.8235 14.763 15.5303 14.4697Z"
                    fill="black"
                  />
                  <mask
                    id="mask0_68_1992"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="14"
                    height="14"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.75 8.25C3.75 5.76825 5.76825 3.75 8.25 3.75C10.7318 3.75 12.75 5.76825 12.75 8.25C12.75 10.7318 10.7318 12.75 8.25 12.75C5.76825 12.75 3.75 10.7318 3.75 8.25ZM15.5303 14.4697L12.984 11.9228C13.7738 10.9073 14.25 9.6345 14.25 8.25C14.25 4.94175 11.5582 2.25 8.25 2.25C4.94175 2.25 2.25 4.94175 2.25 8.25C2.25 11.5582 4.94175 14.25 8.25 14.25C9.6345 14.25 10.9073 13.7738 11.9228 12.984L14.4697 15.5303C14.616 15.6765 14.808 15.75 15 15.75C15.192 15.75 15.384 15.6765 15.5303 15.5303C15.8235 15.237 15.8235 14.763 15.5303 14.4697Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_68_1992)">
                    <rect width="18" height="18" fill="currentColor" />
                  </g>
                </g>
              </svg>
            </Icon>
          </div>
        </div>
        <div className="task-bar-btn flex gap-2 justify-self-end order-1 md:order-3">
          <button className="text-xs sm:text-sm bg-gradient-to-br from-[#b67bbb] to-[#7b1984] text-white px-4 py-2 rounded-full shadow-md">
            ADD TASK
          </button>
        </div>
      </div>
    );
  };
  
  const ListView = () => {
    return (
      <div className="task-lists-view relative">
        <hr className="mt-3" />
        <div className="task-lists-view-header text-xs hidden md:flex px-6 py-3 sticky top-0 bg-white/50 backdrop-blur-md z-[1] rounded-b-xl">
          <span className="flex-[2]">Task name</span>
          <span className="flex-1">Due on</span>
          <span className="flex-1">Task Status</span>
          <span className="flex-1">Task Category</span>
        </div>
        <div className="task-lists flex flex-col gap-3">
          <div className="task-list rounded-xl shadow-md">
            <div className="task-list-header bg-gradient-to-b from-pink-100 to-pink-200 px-3 py-2 rounded-t-xl flex items-center justify-between border border-pink-300">
              <p className="text-sm font-medium text-pink-900">
                Todo (<span>3</span>)
              </p>
              <Icon className="w-3 h-3 text-pink-800 hover:text-pink-900 cursor-pointer m-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 0.750113C7.61589 0.750113 7.23189 0.897113 6.93939 1.18961L0.939387 7.18961C0.352887 7.77611 0.352887 8.72411 0.939387 9.31061C1.52589 9.89711 2.47389 9.89711 3.06039 9.31061L8.01789 4.35311L12.9574 9.12311C13.5559 9.69761 14.5024 9.68111 15.0784 9.08561C15.6544 8.49011 15.6379 7.53911 15.0424 6.96461L9.04239 1.17161C8.74989 0.889613 8.37489 0.750113 7.99989 0.750113Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </div>
            <div className="todos">
              <ul className="todo">
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Interview with Design Team
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>Today</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs">
                      TO-DO
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Work</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Team Meeting
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>30 Dec, 2024</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs">
                      TO-DO
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Personal</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Design a Dashboard page along with wireframes
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>30 Dec, 2024</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs">
                      TO-DO
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Personal</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="task-list rounded-xl shadow-md">
            <div className="task-list-header bg-gradient-to-br from-blue-200 to-blue-300 border border-blue-300 px-3 py-2 rounded-t-xl flex items-center justify-between">
              <p className="text-sm font-medium text-blue-900">
                In-Progress (<span>3</span>)
              </p>
              <Icon className="w-3 h-3 text-blue-800 hover:text-blue-900 cursor-pointer m-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 0.750113C7.61589 0.750113 7.23189 0.897113 6.93939 1.18961L0.939387 7.18961C0.352887 7.77611 0.352887 8.72411 0.939387 9.31061C1.52589 9.89711 2.47389 9.89711 3.06039 9.31061L8.01789 4.35311L12.9574 9.12311C13.5559 9.69761 14.5024 9.68111 15.0784 9.08561C15.6544 8.49011 15.6379 7.53911 15.0424 6.96461L9.04239 1.17161C8.74989 0.889613 8.37489 0.750113 7.99989 0.750113Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </div>
            <div className="todos">
              <ul className="todo">
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Interview with Design Team
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>Today</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
                      In-Progress
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Work</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Team Meeting
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>30 Dec, 2024</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
                      In-Progress
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Personal</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Design a Dashboard page along with wireframes
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>30 Dec, 2024</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
                      In-Progress
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Personal</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="task-list rounded-xl shadow-md">
            <div className="task-list-header bg-gradient-to-br from-green-200 to-green-300 border border-green-300 px-3 py-2 rounded-t-xl flex items-center justify-between">
              <p className="text-sm font-medium text-green-900">
                Completed (<span>3</span>)
              </p>
              <Icon className="w-3 h-3 text-green-800 hover:text-green-900 cursor-pointer m-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 0.750113C7.61589 0.750113 7.23189 0.897113 6.93939 1.18961L0.939387 7.18961C0.352887 7.77611 0.352887 8.72411 0.939387 9.31061C1.52589 9.89711 2.47389 9.89711 3.06039 9.31061L8.01789 4.35311L12.9574 9.12311C13.5559 9.69761 14.5024 9.68111 15.0784 9.08561C15.6544 8.49011 15.6379 7.53911 15.0424 6.96461L9.04239 1.17161C8.74989 0.889613 8.37489 0.750113 7.99989 0.750113Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </div>
            <div className="todos">
              <ul className="todo">
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Interview with Design Team
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>Today</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
                      Completed
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Work</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Team Meeting
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>30 Dec, 2024</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
                      Completed
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Personal</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200">
                  <div className="flex items-center flex-[2]">
                    <input type="checkbox" />
                    <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
                    <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
                      Design a Dashboard page along with wireframes
                    </p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <p>30 Dec, 2024</p>
                  </div>
                  <div className="flex-1 hidden md:block">
                    <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
                      Completed
                    </span>
                  </div>
                  <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
                    <span className="hidden md:inline-block">Personal</span>
                    <div className="relative mx-1 cursor-pointer">
                      <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Icon>
                      <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden hidden">
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-slate-600">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span>Edit</span>
                        </li>
                        <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100">
                          <Icon className="w-3 h-3 text-red-400">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                          <span className="text-red-700">Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute top-1/2 -translate-y-1/2 rounded-md sm:rounded-xl shadow-lg bg-white pointer-events-none overflow-hidden min-w-[70rem] scale-90">
      <PriNav />
      <div className="px-5 py-2.5 flex md:flex-col gap-3">
        <SecNav />
        <TaskBar />
      </div>
      <div className="task-container max-h-[60vh] min-h-96 px-5 pb-5 overflow-y-auto">
        <ListView />
      </div>
    </div>
  );
}

const LoginForm = () => {
  const {googleSignIn} = useAuth();

  const handleSignIn = async() => {
    try{
      await googleSignIn();
    } catch (error){
      console.log(error);
    }
  }
  return(
    <div className="flex flex-col gap-3 items-center md:items-start bg-pink-100/50 md:bg-transparent backdrop-blur-sm p-5 md:p-0 rounded-xl md:rounded-none">
      <div className="flex gap-2 items-center">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#7f2589]">
          <svg
            className="w-full h-full"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.66536 26.5837H19.332C21.9904 26.5837 24.1654 24.4087 24.1654 21.7503V8.45866C24.1654 6.04199 22.4737 4.10866 20.1779 3.74616C19.6945 2.90033 18.8487 2.41699 17.882 2.41699H11.1154C10.1487 2.41699 9.30287 2.90033 8.81953 3.74616C6.5237 4.10866 4.83203 6.04199 4.83203 8.45866V21.7503C4.83203 24.4087 7.00703 26.5837 9.66536 26.5837ZM10.8737 4.95449C10.8737 4.95449 10.9945 4.83366 11.1154 4.83366H18.0029L18.1237 4.95449V5.80033C18.1237 5.92116 18.0029 6.04199 17.882 6.04199H11.1154C10.9945 6.04199 10.8737 5.92116 10.8737 5.80033V4.95449ZM7.2487 8.45866C7.2487 7.49199 7.73203 6.76699 8.45703 6.28366V6.40449C8.45703 6.52533 8.57786 6.64616 8.57786 6.76699C8.57786 6.76699 8.57786 6.88783 8.6987 6.88783C8.6987 7.00866 8.81953 7.12949 8.81953 7.12949L8.94036 7.25033C8.94036 7.37116 9.0612 7.37116 9.18203 7.49199L9.30286 7.61283L9.54453 7.85449L9.66536 7.97533C9.7862 7.97533 9.7862 8.09616 9.90703 8.09616C9.90703 8.09616 10.0279 8.09616 10.0279 8.21699C10.1487 8.21699 10.2695 8.33783 10.3904 8.33783H10.5112C10.7529 8.45866 10.8737 8.45866 11.1154 8.45866H18.607C18.7279 8.45866 18.8487 8.45866 18.9695 8.33783C18.9695 8.33783 19.0904 8.33783 19.0904 8.21699C19.2112 8.21699 19.2112 8.09616 19.332 8.09616L19.4529 7.97533C19.5737 7.97533 19.5737 7.85449 19.6945 7.73366L19.8154 7.61283L20.057 7.37116L20.1779 7.25033C20.1779 7.12949 20.2987 7.12949 20.2987 7.00866C20.2987 7.00866 20.2987 6.88783 20.4195 6.88783C20.4195 6.76699 20.5404 6.64616 20.5404 6.52533V6.40449C21.2654 6.76699 21.7487 7.61282 21.7487 8.57949V21.8712C21.7487 23.2003 20.6612 24.2878 19.332 24.2878H9.66536C8.3362 24.2878 7.2487 23.2003 7.2487 21.8712V8.45866Z"
              fill="currentColor"
            />
            <path
              d="M10.8763 19.333H13.293C14.018 19.333 14.5013 18.8497 14.5013 18.1247C14.5013 17.3997 14.018 16.9163 13.293 16.9163H10.8763C10.1513 16.9163 9.66797 17.3997 9.66797 18.1247C9.66797 18.8497 10.1513 19.333 10.8763 19.333ZM10.8763 14.4997H18.1263C18.8513 14.4997 19.3346 14.0163 19.3346 13.2913C19.3346 12.5663 18.8513 12.083 18.1263 12.083H10.8763C10.1513 12.083 9.66797 12.5663 9.66797 13.2913C9.66797 14.0163 10.1513 14.4997 10.8763 14.4997Z"
              fill="currentColor"
            />
          </svg>
        </Icon>
        <h1 className="text-lg sm:text-2xl font-semibold bg-gradient-to-b from-[#4e0e55] to-[#ac3fb7]  text-transparent bg-clip-text">
          TaskBuddy
        </h1>
      </div>
      <p className="max-w-96 text-xs sm:text-base">
        Streamline your workflow and track progress effortlessly with our
        all-in-one task management app.
      </p>
      <button className="flex items-center px-8 py-3 w-fit mt-2 md:mt-4 rounded-full sm:rounded-lg bg-slate-800 shadow-lg" onClick={handleSignIn}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6">
          <svg
            className="w-full h-full"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_68_3649)">
              <path
                d="M21.2088 10.8997C21.2088 10.0457 21.1395 9.42259 20.9895 8.77637H11.2383V12.6306H16.962C16.8467 13.5885 16.2235 15.031 14.8387 16.0003L14.8193 16.1293L17.9024 18.5178L18.1161 18.5391C20.0778 16.7273 21.2088 14.0616 21.2088 10.8997Z"
                fill="#4285F4"
              />
              <path
                d="M11.2371 21.0554C14.0412 21.0554 16.3954 20.1322 18.1149 18.5397L14.8375 16.0009C13.9605 16.6125 12.7834 17.0395 11.2371 17.0395C8.49061 17.0395 6.15957 15.2278 5.32862 12.7236L5.20682 12.734L2.00091 15.2151L1.95898 15.3316C3.66687 18.7243 7.17501 21.0554 11.2371 21.0554Z"
                fill="#34A853"
              />
              <path
                d="M5.32704 12.7228C5.10779 12.0766 4.9809 11.3842 4.9809 10.6687C4.9809 9.95322 5.10779 9.26085 5.31551 8.61462L5.3097 8.47699L2.06362 5.95605L1.95741 6.00657C1.25351 7.41446 0.849609 8.99545 0.849609 10.6687C0.849609 12.342 1.25351 13.9229 1.95741 15.3308L5.32704 12.7228Z"
                fill="#FBBC05"
              />
              <path
                d="M11.2371 4.29906C13.1873 4.29906 14.5028 5.14147 15.2529 5.84545L18.1841 2.98354C16.3839 1.31026 14.0412 0.283203 11.2371 0.283203C7.17501 0.283203 3.66687 2.61424 1.95898 6.00695L5.31708 8.615C6.15957 6.11085 8.49061 4.29906 11.2371 4.29906Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_68_3649">
                <rect
                  width="20.3682"
                  height="20.8434"
                  fill="white"
                  transform="translate(0.849609 0.283203)"
                />
              </clipPath>
            </defs>
          </svg>
        </Icon>
        <span className="ml-3 text-white text-sm sm:text-base">Continue with Google</span>
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <div className="w-full min-h-svh h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-pink-50 to-pink-100">
        <Orbits
          className={"w-[20rem] h-[20rem] md:w-[60rem] md:h-[60rem] md:right-0 right-1/2 top-[50%] md:top-1/2 transform -translate-y-1/2 -translate-x-[30%] md:translate-x-0"}
          borders={["border-[#c35bcc]", "border-[#b253bb]", "border-[#7b1984]"]}
          backgrounds={["#c35bcc", "#b253bb", "#7b1984"]}
        />
        <Orbits
          className={"w-[20rem] h-[20rem] left-1/2 bottom-0 transform translate-y-[30%] -translate-x-1/2 md:hidden"}
          borders={["border-[#c35bcc]", "border-[#b253bb]", "border-[#7b1984]"]}
          backgrounds={["#c35bcc", "#b253bb", "#7b1984"]}
        />
        <Orbits
          className={"w-[20rem] h-[20rem] md:w-[60rem] md:h-[60rem] md:left-0 left-1/2 top-0 transform -translate-y-[30%] translate-x-[30%] md:hidden"}
          borders={["border-[#c35bcc]", "border-[#b253bb]", "border-[#7b1984]"]}
          backgrounds={["#c35bcc", "#b253bb", "#7b1984"]}
        />
        <div className="max-w-[90rem] flex w-full">
          <div className="flex flex-col justify-center items-center md:items-start gap-2 flex-1 min-w-80 m-0 md:m-10 z-[2] text-slate-600">
            <LoginForm/>
          </div>
          <div className="flex-1 relative hidden md:block z-[2] min-h-svh">
            <DummyContainer/>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
