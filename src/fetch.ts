import QS from 'qs'

export enum ContentType {
    json = 'application/json;charset=UTF-8',
    form = 'application/x-www-form-urlencoded;charset=UTF-8'
}

export enum HttpMethod {
    get = 'GET',
    post = "POST"
}

export interface IReqConfig {
    body?: object
    method?: string
    headers?: IHeader
    token?: string
    'Content-Type'?: string
}

export interface IHeader {
    'Content-Type'?: string
    'X-Request-With'?: string
    token?: string
    [propsName: string]: any
}

export const baseUrl: string = 'http://localhost:4000/';

const httpRequest = async (url: string, config: IReqConfig,) => {
    let promise: Response
    let contentType: string
    if(config['Content-Type'] !== undefined) {
        contentType = config['Content-Type']
    } else if(config.method === HttpMethod.post){
        contentType = ContentType.form
    } else {
        contentType = ContentType.json
    }

    const reqUrl = (baseUrl + url).replace('//', '/');

    const headers: Headers =  new Headers({
        token: config.token === undefined ? sessionStorage.token: config.token,
        'Content_type': contentType
    } as IHeader)

    if(!config.method || config.method === HttpMethod.get) {
        promise = await fetch(reqUrl, {
            headers
        })
    } else if(config.method === HttpMethod.post) {
        promise = await fetch(reqUrl, {
            body: QS.stringify(config.body),
            headers,
            method: HttpMethod.post
        })
    } else {
        promise = await fetch(reqUrl, {
            body: JSON.stringify(config.body),
            headers,
            method: HttpMethod.post
        })
    }
    return handleRes(promise)
}

const handleRes = async (res: Response) => {
    const parsedRes = await parseRes(res);
    if(res.ok) {
        return parsedRes
    } 
    const error =  parsedRes
    throw error
}

const parseRes = async (res: Response) => {
    const contentType = res.headers.get('Content-Type')
    if(contentType) {
        if(contentType.indexOf('json') > -1 ) {
            return res.json()
        }

        if(contentType.indexOf('text') > -1 ) {
            return res.text()
        }

        if(contentType.indexOf('form') > -1 ) {
            return res.formData()
        }

        if(contentType.indexOf('video') > -1 ) {
            return res.blob()
        }
    }   
    return await res.text()
}

export default httpRequest