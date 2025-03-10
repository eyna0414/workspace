
#1번 도서정보 테이블 BOOK_INFO를 생성
CREATE TABLE BOOK_INFO (
	BOOK_NUMBER INT PRIMARY KEY
	, BOOK_NAME VARCHAR(20) NOT NULL
	, BOOK_AUTHOR VARCHAR(10) NOT NULL
	, BOOK_PRICE INT 
	, BOOK_COMPANY VARCHAR(20) DEFAULT '미지정'
	, BOOK_DATE DATE 
);


#2번 위에서 생성한 BOOK_INFO 테이블에 다음의 데이터를 삽입하는 쿼리문을 작성
INSERT INTO BOOK_INFO
VALUES
(101, '자바 기초', '홍길동', 30000, 'A출판', '2025-02-15'),
(102, '리액트 기초', '이순신', 20000, 'B출판', '2025-01-22');

SELECT * FROM BOOK_INFO;
COMMIT;

#3번 도서번호가 101번인 도서의 도서명은 ‘자바_고급’, 가격은 25000, 출판사는 ‘IT출판’으로 변경
UPDATE BOOK_INFO
SET BOOK_NAME = '자바_기초', BOOK_PRICE = 30000, BOOK_COMPANY = 'A출판'
WHERE BOOK_NUMBER = 101;


#4번 급여가 500에서 3000 사이이고 커미션이 NULL인 사원의 사원번호, 사원명, 급여, 커미션을 조회
#   커미션 컬럼은 '인센티브' 별칭
SELECT EMPNO, ENAME, SAL, COMM 인센티브 
FROM EMP 
WHERE SAL BETWEEN 500 AND 3000 
AND COMM IS NOT NULL;

#5번 사원들 중 이름에 ‘병’이 들어가거나, ‘김’이 들어가는 사원들의 사번, 이름, 직급, 입사일을 조회
#  직급 기준 오름차순으로 정렬 후, 사번기준 내림차순 정렬

SELECT EMPNO, ENAME, JOB, HIREDATE
FROM emp
WHERE ENAME LIKE '%병%' OR ENAME LIKE '%김%'
ORDER BY JOB ,EMPNO DESC;


#6번 사원의 사번, 이름, 부서번호, 부서명을 조회
# 부서명은 부서번호가 10일 때는 ‘인사부’, 20일 때는 ‘영업부’, 30일때는 ‘개발부’, 
# 그 외의 값은 ‘생산부’로 조회. CASE 사용
SELECT EMPNO, ENAME, DEPTNO, 
CASE DEPTNO
WHEN 10 THEN '인사부'
WHEN 20 THEN '영업부'
WHEN 30 THEN '개발부'
ELSE '생산부'
END
FROM emp;

#7번 짝수 월에 입사한 모든 사원의 사번, 이름, 입사일, 커미션을 입사일 기준 오름차순으로 조회
#   커미션이 NULL일 경우 커미션은 0으로 조회
SELECT EMPNO, ENAME, HIREDATE, IFNULL(COMM, 0)
FROM emp
WHERE 
EXTRACT(MONTH FROM HIREDATE) % 2 = 0
ORDER BY HIREDATE ASC;


#8번 조인을 사용 부서명이 ‘인사부’가 아니고 급여가 500이상인 사원의 사번, 이름, 입사일, 급여, 부서번호, 부서명을 조회
#   사번 기준 내림차순으로 정렬 후 사원 이름 기준 오름차순으로 정렬
SELECT EMPNO, ENAME, HIREDATE, SAL, emp.DEPTNO, DNAME
FROM emp INNER JOIN dept 
ON emp.DEPTNO = dept.DEPTNO
WHERE DNAME != '인사부' AND SAL >= 500
ORDER BY EMPNO DESC, ENAME;

#9번 입사년도가 2003년부터 2007년 전까지인 사원들의 사번, 부서번호, 부서명, 성을 제외한 사원명을 조회
#   성을 제외한 사원명은 ‘이름’이라는 별칭을 사용하고, 성은 전체이름 중 처음 한 글자만 성이라고 간주
SELECT EMPNO, emp.DEPTNO, DNAME, 
SUBSTR(ENAME, 2) 이름
FROM emp INNER JOIN dept 
ON emp.DEPTNO = dept.DEPTNO
WHERE EXTRACT(YEAR FROM HIREDATE) BETWEEN 2003 AND 2006;

#10번 조인을 활용하여 사번, 사원명, 지급, 직속 상사의 사번, 직속 상사명, 직속 상사의 직급을 조회
#     MGR 컬럼이 직속 상사의 사번
SELECT E.EMPNO, E.ENAME, E.JOB, M.EMPNO, M.ENAME, M.JOB
FROM EMP E LEFT JOIN EMP M
ON E.EMPNO = M.EMPNO; 












