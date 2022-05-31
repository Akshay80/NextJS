import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req) {
  const { cookies } = req;
  const urls = req.nextUrl.clone();
  const secret = process.env.SECRET;
  const jwt = cookies.OursiteJWT;

  // If Route is Login
//   console.log(url.includes("/login"))
if(urls.pathname === '/')
{
    urls.pathname = '/login'
    return NextResponse.redirect(urls);
}
  if (urls.pathname === '/login') {
    if (jwt) {
        urls.pathname = '/dashboard'
      return NextResponse.redirect(urls);
      
    } else {
      return NextResponse.next();
    }
  }
  // Routes Login Ends Here
  
//   Dashboard Route Begins Here
  if(urls.pathname === "/dashboard")
  {
    if(jwt === undefined)
    {
        urls.pathname = '/login'
        return NextResponse.redirect(urls)
    }
    try {
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect("/dashboard")
    }
  } 
// Dashboard Route Ends Here
  
}
