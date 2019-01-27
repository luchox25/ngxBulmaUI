export function getNgbInputUnsupportedTypeError(type: string): Error {
    return Error(`Input type "${type}" isn't supported by ngb-input.`);
}
