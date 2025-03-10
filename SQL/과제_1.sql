
# 1. 회원정보를 관리하는 테이블을 생성하려고 한다. 
#    이 테이블에서 관리하는 정보로는 회원번호, 아이디, 비밀번호, 회원이름, 나이, 이메일주소가 있다. 
#    해당 테이블명을 MY_MEMBER라고 했을 때, 테이블 생성 쿼리문을 작성하세요. 
#    회원번호는 기본키이며 아이디, 비밀번호, 회원이름은 NULL이 들어올 수 없다. 
#    또한, 이메일은 중복되는 데이터가 들어올 수 없다.

CREATE TABLE MY_MEMBER (
	MEM_NUMBER INT PRIMARY KEY
	, MEM_ID VARCHAR(20) NOT NULL
	, MEM_PW VARCHAR(20) NOT NULL
	, MEM_NAME VARCHAR(20) NOT NULL
	, MEM_AGE INT
	, MEM_EMAIL VARCHAR(30) UNIQUE
);

SELECT * FROM MY_MEMBER;

# 2. 위에서 생성한 MY_MEMBER에 아래 표에서 제시하는 데이터를 삽입하는 쿼리문을 작성하세요.

INSERT INTO MY_MEMBER (MEM_NUMBER, MEM_ID, MEM_PW, MEM_NAME, MEM_AGE, MEM_EMAIL) 
VALUES (101, 'kim', '1111', '김자바', 30, 'kim@gmail.com');

INSERT INTO MY_MEMBER (MEM_NUMBER, MEM_ID, MEM_PW, MEM_NAME, MEM_AGE, MEM_EMAIL) 
VALUES (102, 'hong', '5678', '홍자바', 25, 'hong@gmail.com');

#3. 회원번호가 101번인 회원의 이름을 ‘유관순’으로, 
# 나이는 현재 나이에서 5를 증가시킨 값으로 수정하는 쿼리문을 작성

UPDATE MY_MEMBER 
SET 
MEM_NAME = '유관순', 
MEM_AGE = MEM_AGE + 5
WHERE MEM_NUMBER = 101;

#4. 급여가 500에서 3000 사이이고 커미션이 NULL이 아닌 사원의 사원번호, 사원명, 급여, 커미션을 조회하는 쿼리문 작성

SELECT EMPNO, ENAME, SAL, COMM 
FROM EMP 
WHERE SAL BETWEEN 500 AND 3000 
AND COMM IS NOT NULL;

SELECT * FROM emp;
#5. 사원들 중 이름이 ‘기’로 끝나기나, ‘김’이 들어가는 사원들의 사번, 이름, 입사일을 조회하되, 
#   사번기준 내림차순 정렬하여 조회하는 쿼리문

SELECT EMPNO, ENAME, HIREDATE
FROM emp
WHERE ENAME LIKE '%기' OR ENAME LIKE '%김%'
ORDER BY EMPNO DESC;

#6. 사원의 사번, 이름, 부서번호, 부서명을 조회해보자. 
# 서명은 부서번호가 10일 때는 ‘인사부’, 20일 때는 ‘영업부’, 30일 때는 ‘개발부’, 
# 그 외의 값은 ‘생산부’로 조회되어야 한다. 조인 사용하는 문제 아님. CASE 사용.

# 케이스 문법 4번 자료 논리함수
SELECT * FROM emp;

SELECT SAL
	, CASE
		WHEN SAL > 500 THEN '500초과'
		WHEN SAL < 500 THEN '500미만'
		ELSE '500'
		END AS AAA
FROM emp;

SELECT DEPTNO
FROM emp;



#7. 1월에 입사한 모든 사원의 사번, 이름, 입사일, 커미션을 입사일 기준 오름차순으로 조회하는 쿼리문을 작성하세요. 
#단, 커미션이 NULL일 경우 커미션은 0으로 조회되어야 한다
#4번 자료 논리함수 #IFNULL ->커미션이 NULL일 경우 커미션은 0으로 조회

#1월에 입사한 사람 -> 4번 자료 날짜관련내장함수
SELECT *
FROM emp;

#오늘날짜를 조회할 수 있는 함수
SELECT NOW();, SYSDATE();

SELECT NOW(), YEAR(NOW()), DAY(NOW()), HOUR(NOW());

#서브쿼리는 문제에서 제외

#8. 서브쿼리를 사용하여 사장을 제외한 직원 전체의 평균 급여보다 급여가 높은 직원들의 
#사번, 사원명, 급여, 직급을 조회하는 쿼리문을 작성해보세요

# 9. 서브쿼리를 사용하여 부서명이 ‘인사부’인 사원의 사번, 이름, 입사일, 급여, 부서번호, 부서명을 
# 조회하는 쿼리문을 작성해보자. 

# 10. 조인을 사용하여 부서명이 ‘인사부’가 아니고 급여가 500이상인 사원의 
# 사번, 이름, 입사일, 급여, 부서번호, 부서명을 조회하는 쿼리문을 작성해보자. 
# 단, 정렬은 사번 기준 내림차순으로 정렬 후 사원 이름 기준 오름차순으로 정렬한다

