import file from '../../card.json';

export const fetchCardData = async () => {
    // We return 'file' directly because it's already the data we need.
    // Axios cannot use a JSON array as a 'baseURL'.
    return file;
}
