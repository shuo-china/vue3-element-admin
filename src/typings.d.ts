import 'vue-router'
import 'axios'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    roles?: string[]
  }
}

declare module 'axios' {
  export class Axios {
    constructor(config?: AxiosRequestConfig)
    defaults: AxiosDefaults
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>
      response: AxiosInterceptorManager<AxiosResponse>
    }
    getUri(config?: AxiosRequestConfig): string
    request<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>
    get<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    delete<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    head<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    options<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    post<T = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    put<T = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    patch<T = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    postForm<T = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    putForm<T = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
    patchForm<T = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<T>
  }

  export interface AxiosInstance extends Axios {
    <T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>
    <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>

    defaults: Omit<AxiosDefaults, 'headers'> & {
      headers: HeadersDefaults & {
        [key: string]: AxiosHeaderValue
      }
    }
  }
}
