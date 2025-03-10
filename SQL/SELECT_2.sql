
-- EMP테이블에서 급여가 300이상이면서, 700이하인 사원들의 
-- 사번, 사원명, 급여를 조회하시오.
SELECT EMPNO, ENAME, SAL 
FROM emp 
WHERE SAL >= 300 AND SAL <= 700;

-- 위와 같이 특정 범위를 조건으로 작성할 때는 BETWEEN  연산자를 사용!
-- WHERE 컬럼 A BETWEEN B
SELECT EMPNO, ENAME, SAL 
FROM emp 
WHERE SAL BETWEEN 300 AND 700;

-- EMP테이블에 저장된 직원 정보 중 사번이 1003번에서 1007번 사이이고, 커미션은 NULL이 아닌 직원들의
-- 사번, 사원명, 급여, 커미션을조회!
SELECT EMPNO, ENAME, SAL, COMM 
FROM emp 
WHERE EMPNO BETWEEIN 1003 AND 1007 
AND COMM IS NOT NULL;

-- EMP 테이블에 저장된 직원 정보 중
-- 급여가 300, 400, 500인 사원들의 모든 정보 조회
SELECT * 
FROM emp 
WHERE SAL = 300 OR SAL = 400 OR SAL = 500;

-- 위의 쿼리문은 아래처럼 IN연산자를 사용하여 작성할 수도 있다.
-- IN연산자 : WHERE 컬럼 IN (값1, 값2...);

SELECT * 
FROM emp 
WHERE SAL IN (300, 400, 500);

-- EMP 테이블에 저장된 직원 정보 중
-- 사번이 1003, 1005, 1007인 사원들의 
-- 사번, 사원명, 입사일을 조회

SELECT EMPNO, ENAME, HIREDATE 
FROM emp 
WHERE EMPNO IN (1003, 1005, 1007);

-- 조회데이터 정렬하기
-- 정렬 문법 : ORDER BY 정렬기준칼럼 정렬방법(오름차순, 내림차순);
-- 오름차순: ASC, 내림차순 : DESC
-- 정렬을 위한 ORDER BY는 무조건 조회 쿼리문의 가장 마지막에 작성

-- 급여 기준 오름차순 정렬 조회

SELECT * FROM emp 
ORDER BY SAL ASC;

-- 급여 기준 내림차순 정렬 조회

SELECT * FROM emp 
ORDER BY SAL DESC;

-- 사원명 기준 오름차순으로 정렬 조회(사전편찬 순)
SELECT * FROM emp 
ORDER BY ENAME;

-- EMP테이블에 저장된 직원 정보 중
-- 부서번호가 10번이 아닌 직원들의 사번, 사원명, 부서번호를 조회하되
-- 부서번호 기준 오름차순으로 정렬

SELECT EMPNO, ENAME, DEPTNO 
FROM emp 
WHERE DEPTNO != 10 
ORDER BY DEPTNO ASC;


-- EMP테이블에 저장된 직원 정보 중
-- 부서번호가 10번이 아닌 직원들의 사번, 사원명, 부서번호를 조회하되
-- 부서번호 기준 오름차순 정렬 후 사번기준 내림차순 정렬

SELECT EMPNO, ENAME, DEPTNO 
FROM emp 
WHERE DEPTNO != 10 
ORDER BY DEPTNO ASC, EMPNO DESC;

-- EMP테이블에서 직급이 사원, 과장, 부장인 사원들의
-- 사원명, 직급, 급여를 조회하되
-- 우선 직급기준 내림차순 정렬 후, 급여기준 오름차순으로 정렬.

SELECT ENAME, JOB, SAL 
FROM emp 
WHERE JOB IN ('사원', '과장', '부장') 
ORDER BY JOB DESC, SAL ASC;

-- 사원명에 '이'라는 글자가 포함된 사원들의 모든 컬럼 조회
-- 이렇게 컬럼에 특정한 값이 포함된 데이터를 조회할 때는
-- LIKE 연산자와 와일드카드를 사용
-- 와일드카드는 '%', '_' 두 개가 존재.
-- '%' : 0개 이상의 어떤 글자
-- '_' : 1개의 어떤 글자
-- '김_' : 김으로 시작하는 두 글자 (김x, 김1, 김나, 김자바x)
-- '_나__' : 두 번째 글자가 나인 네 글자
-- '박%' : 박으로 시작하는 모든 글자 (박0)
-- '_이%' : 두 번째 글자가 이인 모든 글자 

SELECT *
FROM emp
WHERE ENAME LIKE '%이%';

-- 조회 데이터에서 중복 제거하기
-- 조회 시 컬럼명 앞에 DISTINCT 키워드를 작성하면 중복 데이터는 제거
SELECT DISTINCT JOB FROM emp;

-- DISTINCT 키워드 사용하면 모든 컬럼에서 중복을 제거
-- 중복 : 조회되는 모든 컬럼이 값이 같을 경우 중복으로 판단
SELECT DISTINCT JOB, DEPTNO FROM emp WHERE JOB = '과장';


-- 1. EMP 테이블에서 커미션이 NULL이 아닌 사원 중, 
-- 급여가 350에서 650 사이인 사원들의 사원명, 급여, 커미션을 조회하되, 
-- 쿼리문 작성 시 BETWEEN 연산자를 사용하여 작성하시오
SELECT EMPNO, SAL, COMM 
FROM emp
WHERE COMM IS NOT NULL
AND SAL BETWEEN 350 AND 650;



-- 2. 직급이 과장, 차장, 부장인 직원의 사번, 사원명, 직급을 조회하되, 
-- 직급 기준 오름차순으로 정렬하고, 쿼리 작성 시 IN 연산자를 사용하시오.
SELECT EMPNO, ENAME, JOB
FROM emp
WHERE JOB IN ('과장', '차장', '부장')
ORDER BY JOB ASC;



-- 3. 부서번호가 10, 20인 부서에 소속된 직원 중, 
-- 이름에 ‘이’가 포함된 직원의 사번, 사원명, 부서번호, 급여를 조회하되, 
-- 부서번호 기준 내림차순으로 정렬 후, 부서번호가 같다면 
-- 급여가 낮은 순부터 조회하는 쿼리문을 작성하시오
SELECT EMPNO, ENAME, DEPTNO, SAL
FROM emp
WHERE DEPTNO IN (10, 20)
AND ENAME LIKE '%이%'
ORDER BY DEPTNO DESE, SAL ASC;




--  4. 이름이 ‘기＇로 끝나는 직원 중, 
-- 커미션은 NULL이고 급여는 400에서 800 사이인 직원의 모든 컬럼 정보를 조회하시오.

SELECT * 
FROM emp 
WHERE ENAME LIKE '%기' 
AND COMM IS NULL 
AND SAL BETWEEN 400 AND 800; 




--  5. 다음과 같은 데이터가 있는 CLASS_INFO 테이블에서 
-- SELECT DISTINCT CLASS_NAME, TEACHAR FROM CLASS_INFO WHERE CLASS_NAME = ‘자바반’; 으로 작성한
-- 쿼리 실행 결과 조회되는 튜플(Tuple)의 갯수는?  
















 