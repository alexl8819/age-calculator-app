import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('dayjs', () => ({ _esModule: true, default: jest.requireActual('dayjs') }));
jest.mock('dayjs/plugin/customParseFormat', () => ({
  default: jest.requireActual('dayjs/plugin/customParseFormat'),
}));