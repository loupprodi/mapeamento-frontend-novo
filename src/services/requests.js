import apiFetch from './api';

export const signIn = async (email, password) => {
  try {
    const result = await apiFetch('/api/users/authenticate', {
      headers: {
        content_type: 'application/json',
      },
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
    });
    return result;
  } catch (error) {
    return error.data.response;
  }
};

export const signUp = async (
  name,
  password,
  username,
  email,
  responsable,
  contatResponsable,
) => {
  try {
    const result = await apiFetch('/api/users', {
      headers: {
        content_type: 'application/json',
      },
      method: 'POST',
      data: {
        name: name,
        password: password,
        username: username,
        email: email,
        responsable: responsable,
        contatResponsable: contatResponsable,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const createStructure = async (name, description) => {
  try {
    const result = await apiFetch('/api/estruturas', {
      headers: {
        content_type: 'application/json',
      },
      method: 'POST',
      data: {
        name: name,
        description: description,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const getStructure = async () => {
  try {
    const result = await apiFetch('/api/estruturas', {
      headers: {
        content_type: 'application/json',
      },
      method: 'GET',
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const getTagsById = async estrutura_id => {
  try {
    const result = await apiFetch('/api/tags/', {
      headers: {
        Content_Type: 'application/json',
      },
      method: 'GET',
      params: {idEstrutura: estrutura_id},
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const getTags = async () => {
  try {
    const result = await apiFetch('/api/tags/', {
      headers: {
        content_type: 'application/json',
      },
      method: 'GET',
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const createTags = async (name, location, numSerial, estrutura_id) => {
  try {
    const result = await apiFetch('/api/tags', {
      headers: {
        content_type: 'application/json',
      },
      method: 'POST',
      data: {
        name: name,
        location: location,
        numSerial: numSerial,
        estrutura: {
          estrutura_id: estrutura_id,
        },
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};
