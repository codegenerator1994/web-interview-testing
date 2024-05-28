import { findServer } from '../src/findServer'
import axios from 'axios';
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

jest.mock('axios');

describe('findServer', () => {
  it('should return the server with the lowest priority that is online', async () => {
    (axios.get as jest.Mock).mockImplementation(url => {
      if (url === "https://does-not-work.perfume.new") {
        return Promise.reject(new Error('Server offline'));
      } else if (url === "https://gitlab.com") {
        return Promise.resolve({ status: 200, data: {} });
      } else if (url === "http://app.scnt.me") {
        return Promise.resolve({ status: 200, data: {} });
      } else if (url === "https://offline.scentronix.com") {
        return Promise.reject(new Error('Server offline'));
      }
      return Promise.reject(new Error('Unknown server'));
    });

    const server = await findServer();
    expect(server.url).toBe("http://app.scnt.me");
  });

  it('should throw an error if no servers are online', async () => {
    (axios.get as jest.Mock).mockImplementation(() => Promise.reject(new Error('Server offline')));

    await expect(findServer()).rejects.toThrow("No servers online");
  });
});
