class CommonValues {
    
  static GetUserId = () => {
    return localStorage.getItem("UserId");
  };

  static GetToken = () => {
    return localStorage.getItem("Token");
  };

  static GetUserName = () => {
    return localStorage.getItem("UserName");
  };

  static GetMobile=()=>{
    return localStorage.getItem("MobileNo");
  }

  static GetLastName=()=>{
    return localStorage.getItem("LastName");
  }

  static GetEmail=()=>{
    return localStorage.getItem("Email");
  }

  static SetValues = (token, userId, UserName , LastName) => {
    localStorage.setItem("Token", token);

    localStorage.setItem("UserId", userId);

    // localStorage.setItem("OrgName", OrgName);

    localStorage.setItem("UserName", UserName);
    
    localStorage.setItem("LastName", LastName);

  };

  static ClearValues = () => {
    localStorage.removeItem("UserId");

    localStorage.removeItem("Token");

    localStorage.removeItem("UserName");

    localStorage.removeItem("Email");

    localStorage.removeItem("LastName");

    localStorage.removeItem("MobileNo");
  };
}

export default CommonValues;
