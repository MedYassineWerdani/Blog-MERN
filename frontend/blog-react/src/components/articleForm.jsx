import { useState } from 'react';

function ArticleForm({ onAddArticle }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Validation simple
    if (!title || !author || !content) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Créer le nouvel article
    const newArticle = {
      id: Date.now(), // ID simple basé sur le timestamp
      title,
      author,
      content,
      likes: 0,
    };

    // Appeler la fonction parent
    onAddArticle(newArticle);

    // Réinitialiser le formulaire
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
      }}
    >
      <h2>Ajouter un nouvel article</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Titre :
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Le titre de votre article"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Auteur :
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Votre nom"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Contenu :
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Le contenu de votre article"
            rows="5"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Publier l’article
        </button>
      </form>
    </div>
  );
}

export default ArticleForm;