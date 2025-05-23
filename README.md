```md
# 🪨📄✂️ Chifoumi en TypeScript

> Projet réalisé en une demi-journée dans le cadre d’un exercice proposé par **Alexandre Leroux**.

---

## 🎯 Objectif

Créer une version console du jeu **Chifoumi** avec une architecture claire, un code propre et des **tests fiables** grâce à **Bun** et **TypeScript**.

---

## 📁 Structure du projet

```
src/
├── enums/ValuesGames.ts         # Enum des choix possibles
├── functions/
│   ├── CompareChoices.ts        # Compare deux choix
│   ├── GetRandomValue.ts        # Valeur IA aléatoire
│   ├── GetValuePlayer.ts        # Saisie joueur avec validation
│   └── PlayOneSleeve.ts         # Une manche complète
tests/
├── ...                          # Un fichier de test par fonction
```

---

## ✅ Points forts

- **Architecture modulaire** (chaque logique dans son fichier)
- **Tests unitaires complets** avec `bun:test`
- **Inputs testables** via injection de fonctions mockées
- **Nommage clair** et cohérent

---

## 🚀 Lancer le projet

```bash
bun install       # Installer les dépendances
bun run src       # Lancer le jeu
bun test          # Lancer les tests
```

---

## 👨‍🏫 Encadrement

Projet encadré par **Alexandre Leroux**, avec un focus sur la qualité du code, la lisibilité et les bonnes pratiques de développement.
```
