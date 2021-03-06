# NestJS GraphQL Example

NestJS GraphQL Boilerplate

## 설치 및 구성

```bash
# 1. 프로젝트 생성
git clone https://github.com/JHyeok/nestjs-graphql-example.git nestjs-project

# 2. 프로젝트 폴더로 이동
cd nestjs-project

# 3. 의존성 설치
npm install
```

설치가 끝났으면 `src/.env.example`을 복사해서 `.env`를 만든다.

```
# DATABASE
DB_TYPE=mysql
DB_USERNAME=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=test
```

`.env`를 본인이 사용하려는 DB 연결 정보에 맞게 수정하면 된다.

## 실행

```bash
# 개발환경으로 실행
$ npm run start:dev
```

## GraphQL

Query
```graphql
query
{
  getBooks {
    id, name, price
  }
}
```
![graphql-query](./readme/graphql-query.png)

Mutation
```graphql
mutation {
  createBook (data: {name: "프로그래밍", price: 25000}) {
    id,
    name,
    price
  }
}
```
![graphql-mutation](./readme/graphql-mutation.png)