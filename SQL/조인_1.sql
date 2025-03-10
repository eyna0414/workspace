
SELECT EMP.EMPNO, EMP.ENAME, EMP.SAL
FROM emp;

SELECT E.EMPNO, E.ENAME, E.SAL
FROM emp E;

SELECT * FROM dept;

# 사원번호, 사원명, 급여, 부서번호, 부서명, 부서의 지역을 조회
SELECT EMPNO, ENAME, SAL, E.DEPTNO, D.DEPTNO, DNAME, LOC
FROM emp E INNER JOIN dept D
ON E.DEPTNO = D.DEPTNO;

#직급이 '사원'이 아닌 직원의 사번, 사원명, 직급, 부서번호, 부서명 조회

SELECT EMPNO, ENAME, JOB, E.DEPTNO, DNAME
FROM emp E INNER JOIN dept D
ON E.DEPTNO = D.DEPTNO
WHERE E.JOB != '사원';

#부서번호가 10, 20번인 직원의 사번, 사원명, 부서명, 부서의 지역을 조회

SELECT EMPNO, ENAME, DNAME, LOC
FROM emp E INNER JOIN dept D 
ON E.DEPTNO = D.DEPTNO
WHERE E.DEPTNO IN (10, 20);


