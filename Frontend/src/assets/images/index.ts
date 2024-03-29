import { ImageType } from 'src/app/core'

const baseUrl = 'assets/images/img-'

const nums: number[] = [];

for (let i = 0; i < 4; i++) {
    
    nums.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1)  
}

export * from './shapes'

export const ImgSpaceDiscovery = {
    src: baseUrl + 'space-discovery.svg',
    alt: 'Space discovery image'
} satisfies ImageType

export const ImgSEO = {
    src: baseUrl + 'seo.svg',
    alt: 'SEO image'
} satisfies ImageType

export const ImgPlan = {
    src: baseUrl + 'plan.svg',
    alt: 'Plan image'
} satisfies ImageType

export const ImgMSLoginBtn = {
    src: baseUrl + 'ms-login-btn.svg',
    alt: 'Sign in with Microsoft button image'
} satisfies ImageType

export const ImgMSLoginBtnForm = {
    src: baseUrl + 'ms-login-btn-form.svg',
    alt: 'Sign in with Microsoft button image'
} satisfies ImageType

export const ImgIdea = {
    src: baseUrl + 'idea.svg',
    alt: 'Idea image'
} satisfies ImageType

export const ImgLogoServer = {
    src: baseUrl + 'logo-server.svg',
    alt: 'Server logo image'
} satisfies ImageType

export const ImgJetpackGuy = {
    src: baseUrl + 'jetpack-guy.svg',
    alt: 'Guy with jetpack image'
} satisfies ImageType

export const ImgSupport = {
    src: baseUrl + 'support.svg',
    alt: 'Support image'
} satisfies ImageType

export const ImgBlogging = {
    src: baseUrl + 'blogging.svg',
    alt: 'Blogging image'
} satisfies ImageType

export const ImgLogin = {
    src: baseUrl + 'login.svg',
    alt: 'Login image'
} satisfies ImageType

export const ImgRegisterWelcome = {
    src: baseUrl + 'register-welcome.svg',
    alt: 'Register welcome image'
} satisfies ImageType

export const BackgroundImgRegisterWelcome = {
    src: baseUrl + 'registerBg.png',
    alt: 'Register welcome image'
} satisfies ImageType

export const BackgroundImgLoginWelcome = {
    src: baseUrl + 'loginBg.png',
    alt: 'Login welcome image'
} satisfies ImageType

export const ImgWebDevelopment = {
    src: baseUrl + 'web-development.svg',
    alt: 'Web development image'
} satisfies ImageType

export const ImgDevs = [
{
    src: `https://xsgames.co/randomusers/assets/avatars/pixel/${nums[0]}.jpg`,
    alt: 'Developers Icon'
}satisfies ImageType,
{
    src: `https://xsgames.co/randomusers/assets/avatars/pixel/${nums[1]}.jpg`,
    alt: 'Developers Icon'
}satisfies ImageType,
{
    src: `https://xsgames.co/randomusers/assets/avatars/pixel/${nums[2]}.jpg`,
    alt: 'Developers Icon'
}satisfies ImageType,
{
    src: `https://xsgames.co/randomusers/assets/avatars/pixel/${nums[3]}.jpg`,
    alt: 'Developers Icon'
}satisfies ImageType,
]satisfies Array<ImageType>