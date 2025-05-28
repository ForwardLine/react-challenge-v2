# 🧪 React Coding Challenge — Loan Dashboard

Welcome! This is a small technical challenge designed to evaluate your React and TypeScript skills, especially regarding data fetching, component composition, and data transformation.

## 📦 Context

You are building a **Loan Dashboard** for an internal lending system. Each loan contains customer and financial data that must be displayed in a table format.

The data is available via a local JSON API and should be fetched asynchronously using `fetch`.

---

## 🎯 Objective

Your goal is to implement a `Loan` component that:

1. **Fetches loan data** from the local API.
2. **Displays the data in a table** using Material UI (`@mui/material`).
3. **Extracts specific values from a raw text field** called `notes`.

---

## 📄 Data Sample

Each loan includes a `notes` field like the following:

```json
"notes": "Assigned to agent AGT-1234. Client type: [VIP]. First contact: 2024-05-20."
```

## 🧠 Your Task

You must extract and display the following values from the `notes` string:

| Field         | Example Value | Description                                |
| ------------- | ------------- | ------------------------------------------ |
| Agent ID      | `AGT-1234`    | The agent assigned to the loan             |
| Client Type   | `VIP`         | Either `VIP` or `REGULAR`, within brackets |
| First Contact | `2024-05-20`  | Date the client was first contacted        |

These values should be displayed as separate columns in the table, alongside the rest of the loan data.

---

## 🧩 Implementation Instructions

### `Loan.tsx`

Your task is to update `Loan.tsx` to:

### 1. **Fetch the loan data**:

- Use `fetch()` to retrieve the loan data from the local JSON file.
- Store the data in a state variable.
- Display a loading spinner (`CircularProgress`) while data is being fetched.

### 2. **Render the loan data in a table**:

- Use Material UI components (`Table`, `TableCell`, `TableRow`) to display the data.
- Ensure that each loan row displays:
  - Basic loan information (e.g., `name`, `amount`, `rate`, `monthlyPayment`).
  - Extracted values from `notes` (e.g., Agent ID, Client Type, First Contact).

### 3. **Handle errors gracefully**:

- Display an `Alert` if there’s an issue with loading the data (e.g., bad JSON or network issues).
