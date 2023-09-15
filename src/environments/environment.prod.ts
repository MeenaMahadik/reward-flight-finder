export const environment = {
  production: false,
  appUrl:"",
  apiUrls:{
    userService:"https://ocz99h6mpf.execute-api.ap-southeast-2.amazonaws.com/stage/user-management/api",
    notificationService:""
  },
  googleServices:{
    mapKey:"",
    firebaseConfig:{}
  },
  payment:{
    currency: 'GBP',
    stripe:{
      publishKey:""
    }
  },
  appVerions:{
    android:{
     versionName:"",
     versionCode:""
    },
    ios:{
      versionName:"",
      versionCode:""
    },
    web:{
      versionName:"",
      versionCode:""
    }
  },
  plugins:{
    
  }
};
