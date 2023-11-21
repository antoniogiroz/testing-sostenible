export function expect<T>(expected: T) {
  return {
    toBe(actual: T) {
      if (actual !== expected) {
        throw new Error(`\tExpected ${expected}, but got ${actual}`);
      }
    },
  };
}

export async function test(description: string, callback: () => void) {
  try {
    await callback();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}`);
    console.log(error.message);
  }
}

export const it = test;

export function describe(description: string, callback: () => void) {
  console.log(description);
  callback();
}
