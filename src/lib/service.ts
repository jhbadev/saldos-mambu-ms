import axios from "axios";
import { Monitor } from "./monitor";

export abstract class Service {
  private URL: string;
  private monitor: Monitor;
  private operationName: string;

  constructor(url: string, operationName: string) {
    this.URL = url;
    this.operationName = operationName;
    this.monitor = Monitor.getInstance(undefined, undefined);
  }

  protected async get(endpoint: string, headers: {}) {
    const response = await axios.get(this.URL + endpoint, {
      headers: this.getHeaders(headers),
    });
    return response.data;
  }

  protected async post(endpoint: string, headers: {}, body: {}) {
    const response = await axios.post(this.URL + endpoint, body, {
      headers: this.getHeaders(headers),
    });
    return response.data;
  }

  private getHeaders(headers: {}) {
    return {
      ...this.monitor.getTrackHeaders(),
      ...headers,
    };
  }

  protected log(monitoringCode: string, error: any = {}) {
    this.monitor.log(
      this.operationName,
      monitoringCode,
      error.response | error
    );
  }
}
